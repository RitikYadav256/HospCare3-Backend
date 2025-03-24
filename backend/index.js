import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import data from "./routes/treatment.route.js";
import connectDB from "./utils/lib.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api", data);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the HospCare API!");
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
