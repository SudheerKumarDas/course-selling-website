import express from "express"

const router = express.Router();

router.post("/signup",(req,res)=>{
    res.send("users sign  up route")
})

router.post("/signin",(req,res)=>{
    res.send("users sign in route")
})

router.get("/courses",(req,res)=>{
    res.send("users can get the courses route")
})

router.post("/courses/:courseId",(req,res)=>{
    res.send("user buy the course with courseId")
})

router.get("/purchasedCourses",(req,res)=>{
    res.send("user get their purchased courses")
})

export default router;