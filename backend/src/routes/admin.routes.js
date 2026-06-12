import express from "express"

const router = express.Router();

router.post("/signup",(req,res)=>{
    res.send("admin sign up route")
})

router.post("/signin",(req,res)=>{
    res.send("admin sign in route")
})

router.post("/courses",(req,res)=>{
    res.send("admin add courses route")
})

router.put("/courses/:courseId",(req,res)=>{
    res.send("admin update course route")
})

router.get("/courses",(req,res)=>{
    res.send("admin get all the available courses route")
})

export default router;