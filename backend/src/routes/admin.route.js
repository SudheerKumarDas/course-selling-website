import express from "express";

import { adminSignin, adminSignup } from "../controllers/admin.controller.js";
import { adminAuth } from "../middlewares/admin.middleware.js";

const router = express.Router();

router.post("/signup", adminSignup);

router.post("/signin", adminSignin);

router.post("/courses",adminAuth, (req, res) => {
    const admin = req.admin;
    res.json({
      admin:admin
    })
});

router.put("/courses/:courseId", (req, res) => {
  res.send("admin update course route");
});

router.get("/courses", (req, res) => {
  res.send("admin get all the available courses route");
});

export default router;
