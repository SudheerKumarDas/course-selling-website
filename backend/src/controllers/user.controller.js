import mongoose from "mongoose";
import bcrypt from "bcrypt"

import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js"

export const userSignUp = async (req,res) => {
    try {
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).json({
                message:"Not enough data for sign up"
            })
        }
        const hashedPassword = await bcrypt.hash(password,5);
        const user = await User.create({
            username,
            email,
            password:hashedPassword
        })

        const token = await generateToken(user._id);
        res.status(201).json({
            message:"User Created successfully",
            token,
            user:{
                username:user.username,
                email:user.email
            }
        })
    } catch (error) {
        console.error("error in signing up user ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}