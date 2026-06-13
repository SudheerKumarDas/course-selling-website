import bcrypt from "bcrypt"

import Admin from "../models/admin.model.js";
import { generateToken } from "../utils/generateToken.js";

export const adminSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({
        message: "username, email and password are required",
      });
    }

    const existingAdmin = await Admin.findOne({email});

    if(existingAdmin){
        return res.status(409).json({
            message:"Admin already registered..."
        })
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const admin = await Admin.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const token = await generateToken(admin._id);

    const adminResponse = {
        id:admin._id,
        username:admin.username,
        email:admin.email,
    }

    res.status(201).json({
        success:true,
        message:"Admin signed up successfully",
        admin:adminResponse,
        token:token
    })

  } catch (error) {
    console.log("Error signing up :", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
