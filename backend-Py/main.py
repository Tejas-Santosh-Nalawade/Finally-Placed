import os
import re
import google.generativeai as genai
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import pdfplumber
import pytesseract
from pdf2image import convert_from_path
import shutil
import tempfile

# Load environment variables
load_dotenv()

# Configure Gemini AI
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Initialize FastAPI app
app = FastAPI()

# Allow frontend origin (adjust port if needed)
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Function to extract text from PDFs
def extract_text_from_pdf(pdf_path):
    text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
    except Exception as e:
        print("PDFPlumber error:", e)

    # If no text is found, use OCR
    if not text.strip():
        images = convert_from_path(pdf_path)
        for image in images:
            text += pytesseract.image_to_string(image) + "\n"

    return text.strip()


# Function to clean Gemini output
def clean_gemini_output(text):
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)         # Remove **bold**
    text = re.sub(r"[*•📚⚠️💼✅🔹🔸📊🛠️📝⬇️🚀🔍]+", "", text)  # Remove emojis/symbols/bullets
    text = re.sub(r"#+\s?", "", text)                    # Remove markdown headings
    text = re.sub(r"[-–—]{1,3}\s?", "", text)            # Remove bullet dashes
    text = re.sub(r"\n{2,}", "\n\n", text)               # Normalize extra newlines
    return text.strip()


# Function to analyze resume using Gemini AI and return plain text
def analyze_resume_text(resume_text, job_description=None):
    model = genai.GenerativeModel("gemini-1.5-flash")

    prompt = f"""
Assume you are a professional resume analyst and career coach.
You are tasked with analyzing a resume and providing a detailed report.

Analyze the following resume and provide report including:
- Overall profile strength
- Key skills
- Areas for improvement
- Recommended courses
- ATS Score (between 0 and 100)
- Job recommendations

give brief and concise answers.

Resume:
{resume_text}
"""

    if job_description:
        prompt += f"\n\nCompare with this job description:\n{job_description}"

    response = model.generate_content(prompt)

    # Clean the output before returning
    return clean_gemini_output(response.text)


# API Endpoint for Resume Analysis
@app.post("/analyze-resume/")
async def analyze_resume_api(file: UploadFile = File(...), job_description: str = Form("")):
    temp_dir = tempfile.mkdtemp()
    file_path = os.path.join(temp_dir, file.filename)

    # Save uploaded file to temporary location
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract resume text
    resume_text = extract_text_from_pdf(file_path)

    # Analyze resume
    analysis = analyze_resume_text(resume_text, job_description)

    # Cleanup
    shutil.rmtree(temp_dir)

    # Return cleaned plain text
    return {"analysis": analysis}


# Optional: Run server directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
