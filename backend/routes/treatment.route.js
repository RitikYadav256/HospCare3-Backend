import express from "express";
import FetchAllDoctors from "../controller/treatment.controller.js";
const router = express.Router();


router.get("/doctors", FetchAllDoctors);
router.get("/appointment", (req, res) => {
  console.log("Asking for appoiontment");
})


export default router; 