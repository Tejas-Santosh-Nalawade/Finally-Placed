import { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

const AnalyzeResume = () => {
    const [file, setFile] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [analysis, setAnalysis] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setError("");
    };

    const handleSubmit = async () => {
        if (!file) {
            setError("❌ Please upload a resume first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("job_description", jobDescription);

        setLoading(true);
        setAnalysis("");
        setError("");

        try {
            const response = await axios.post("http://127.0.0.1:8000/analyze-resume/", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            setAnalysis(response.data.analysis);
        } catch (error) {
            console.error("Error analyzing resume:", error);
            setError("❌ Failed to analyze the resume. Please try again.");
        }

        setLoading(false);
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF({
            orientation: "portrait",
            unit: "pt",
            format: "a4",
        });

        const marginLeft = 40;
        const marginTop = 40;
        const maxWidth = 500;
        const lines = doc.splitTextToSize(analysis, maxWidth);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(lines, marginLeft, marginTop);
        doc.save("Resume_Analysis_Report.pdf");
    };

    return (
        <div className="min-h-screen bg-black text-white p-6 font-sans">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-violet-400">📄 Resume Analyzer</h2>

                <label className="w-full flex items-center gap-2 p-2 bg-gray-800 border border-violet-500 rounded mb-4 cursor-pointer">
                    <span role="img" aria-label="file">📎</span>
                    <span>{file ? file.name : "Upload Resume (PDF)"}</span>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>

                <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste Job Description (Optional)"
                    className="w-full h-32 p-2 bg-gray-800 border border-violet-500 rounded mb-4"
                ></textarea>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`bg-violet-600 text-white px-4 py-2 rounded mb-4 transition duration-200 ${
                        loading ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-700"
                    }`}
                >
                    {loading ? "Analyzing..." : "Analyze Resume"}
                </button>

                {error && <p className="text-red-400 mt-2">{error}</p>}

                {analysis && (
                    <div className="mt-8 border border-violet-500 p-4 rounded bg-gray-900">
                        <h3 className="text-xl font-semibold mb-2 text-violet-300">📝 Analysis Report:</h3>
                        <pre className="whitespace-pre-wrap text-gray-200 text-sm">{analysis}</pre>

                        <button
                            onClick={handleDownloadPDF}
                            className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white transition duration-200"
                        >
                            ⬇️ Download PDF Report
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnalyzeResume;
