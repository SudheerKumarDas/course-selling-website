import express from "express";

import { adminCreateCourse, adminSignin, adminSignup, getAdminCreatedCourses, getAllCourses, updateCourse } from "../controllers/admin.controller.js";
import { adminAuth } from "../middlewares/admin.middleware.js";

const router = express.Router();

router.post("/signup", adminSignup);

router.post("/signin", adminSignin);

router.post("/courses",adminAuth,adminCreateCourse);

router.put("/courses/:courseId",adminAuth, updateCourse);

router.get("/courses",adminAuth ,getAllCourses);

router.get("/admin-courses",adminAuth, getAdminCreatedCourses)

export default router;
