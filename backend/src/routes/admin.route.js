import express from "express";

import { adminCreateCourse, adminSignin, adminSignup, getAllCourses, updateCourse } from "../controllers/admin.controller.js";
import { adminAuth } from "../middlewares/admin.middleware.js";

const router = express.Router();

router.post("/signup", adminSignup);

router.post("/signin", adminSignin);

// const admin = req.admin;
router.post("/courses",adminAuth,adminCreateCourse);

router.put("/courses/:courseId",adminAuth, updateCourse);

router.get("/courses",adminAuth ,getAllCourses);

export default router;
