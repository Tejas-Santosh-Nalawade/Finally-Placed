import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()
const PORT = process.env.PORT || 3000
import axios from "axios"
import connectDB from "./config/db.js"

connectDB()

const app = express()

// Change this origin when in production
// app.use(cors({ origin: "https://dev-clash-flax.vercel.app"})) // for production


// app.use(cors({ origin: "http://localhost:5173"}, )) // for Localhost


// app.use(cors({
//   origin: "https://dev-clash-flax.vercel.app/",
//   credentials: true, // Allow cookies or Authorization headers
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Ensure all required methods are allowed
//   allowedHeaders: ["Content-Type", "Authorization"] // Include necessary headers
// }))

app.use(cors());
// app.use(cors({
//   origin: "https://dev-clash-hackathon.vercel.app", // frontend domain
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

app.use(express.json())

app.use(cookieParser())

app.use("/api/users", userRoutes)

app.get("/job-recommendations", async (req, res) => {
  const url = "https://jsearch.p.rapidapi.com/search";
  const queryParams = {
    query: "developer in India",
    page: "1",
    num_pages: "2",
  };

  const headers = {
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  };

  try {
    const response = await axios.get(url, {
      headers,
      params: queryParams,
    });

    const jobs = response.data.data || [];
    res.json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    res.status(500).json({ error: "Failed to fetch job recommendations" });
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT)
})
