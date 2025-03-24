import express from "express";
import connectDB from "../utils/lib.js";



const FetchAllDoctors = async (req, res) => {
  console.log("Asking for doctor");
  try {
    const db = await connectDB();
    const doctors = await db.collection("doctor").find({}).toArray();
    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default FetchAllDoctors;
