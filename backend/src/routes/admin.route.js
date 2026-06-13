import express from "express";

import { adminSignin, adminSignup } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/signup", adminSignup);

router.post("/signin", adminSignin);

router.post("/courses", (req, res) => {
  res.send("admin add courses route");
});

router.put("/courses/:courseId", (req, res) => {
  res.send("admin update course route");
});

router.get("/courses", (req, res) => {
  res.send("admin get all the available courses route");
});

export default router;
