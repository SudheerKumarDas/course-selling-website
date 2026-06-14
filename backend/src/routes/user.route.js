import express from "express"
import { userCourses, userSignIn, userSignUp } from "../controllers/user.controller.js";
import { userAuth } from "../middlewares/user.middleware.js";

const router = express.Router();

router.post("/signup",userSignUp)

router.post("/signin",userSignIn)

router.get("/courses",userAuth , userCourses)

router.post("/courses/:courseId",(req,res)=>{
    res.send("user buy the course with courseId")
})

router.get("/purchasedCourses",(req,res)=>{
    res.send("user get their purchased courses")
})

export default router;