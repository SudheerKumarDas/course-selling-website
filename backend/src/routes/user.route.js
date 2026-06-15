import express from "express"
import { userCourses, userSignIn, userSignUp, userBuyCourse, purchasedCourses } from "../controllers/user.controller.js";
import { userAuth } from "../middlewares/user.middleware.js";

const router = express.Router();

router.post("/signup",userSignUp)

router.post("/signin",userSignIn)

router.get("/courses",userAuth , userCourses)

router.post("/courses/:courseId", userAuth, userBuyCourse)

router.get("/purchased-courses",userAuth, purchasedCourses)

export default router;