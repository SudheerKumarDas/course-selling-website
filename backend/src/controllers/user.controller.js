import mongoose from "mongoose";
import bcrypt from "bcrypt"

import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js"
import Course from "../models/course.model.js";

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

export const userSignIn = async (req,res) => {
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"Provide email or password"
            })
        }
        const foundUser = await User.findOne({email});
        if(!foundUser){
            return res.status(403).json({
                message:"User not found"
            })
        }
        const isPasswordMatch = bcrypt.compare(password,foundUser.password);
        if(!isPasswordMatch){
            return res.status(403).json({
                message:"Invalid credentials"
            })
        }
        const userResponse = {
            username:foundUser.username,
            email:foundUser.email
        }
        const token = await generateToken(foundUser._id);
        res.status(200).json({
            message:"User logged in successfully",
            token,
            user:userResponse
        })
    } catch (error) {
        console.error("Error in logging in ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const userCourses = async (req,res) => {
    try {
        const userId = req.userId;
        const courses = await Course.find({});
        if(!courses){
            return res.status(404).json({
                message:"No courses are available"
            })
        }
        res.json({
            message:"Courses fetched successfully",
            courses:courses
        })
    } catch (error) {
        console.error("Error in fetching courses ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const userBuyCourse = async (req,res) => {
    try {
        const userId = req.userId;
        const { courseId }= req.params;
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({
                message:"Course not found"
            })
        }
        const user = await User.findByIdAndUpdate(userId,
            { $addToSet:{enrolledCourses:course._id} },
            {new:true}
        )
        res.status(200).json({
            message:"course purchased successfully",
            courseBought : course
        })
        
    } catch (error) {
        console.error("Error in purchasing courses ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const purchasedCourses = async (req,res) => {
    try {
        const userId = req.userId;
        const userProfile = await User.findById(userId).populate("enrolledCourses");
        if(!userProfile.enrolledCourses || userProfile.enrolledCourses.length === 0){
            return res.status(200).json({
                message:"No any courses created yet",
                courses:userProfile.enrolledCourses
            })
        }
        res.status(200).json({
            message:"fetched user enrolled courses",
            courses : userProfile.enrolledCourses || [],
        })
    } catch (error) {
        console.error("Error in fetching enrolled courses ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}