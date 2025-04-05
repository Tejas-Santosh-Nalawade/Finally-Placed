import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()
const PORT = process.env.PORT || 3000

import connectDB from "./config/db.js"

connectDB()

const app = express()

// Change this origin when in production
// app.use(cors({ origin: "https://dev-clash-flax.vercel.app"})) // for production


// app.use(cors({ origin: "http://localhost:5173"}, )) // for Localhost


app.use(cors({
  origin: "https://dev-clash-flax.vercel.app/",
  credentials: true, // Allow cookies or Authorization headers
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Ensure all required methods are allowed
  allowedHeaders: ["Content-Type", "Authorization"] // Include necessary headers
}))


app.use(express.json())

app.use(cookieParser())

app.use("/api/users", userRoutes)


app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT)
})
