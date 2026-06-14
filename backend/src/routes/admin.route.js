import express from "express";

import { adminCreateCourse, adminSignin, adminSignup, getAllCourses } from "../controllers/admin.controller.js";
import { adminAuth } from "../middlewares/admin.middleware.js";

const router = express.Router();

router.post("/signup", adminSignup);

router.post("/signin", adminSignin);

// const admin = req.admin;
router.post("/courses",adminAuth,adminCreateCourse);

router.put("/courses/:courseId", (req, res) => {
  res.send("admin update course route");
});

router.get("/courses",adminAuth ,getAllCourses);

export default router;
