import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import Admin from "../models/admin.model.js";

export const adminAuth = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(404).json({
                message:"No token"
            })
        }
        const decodedData = await jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        const admin = await Admin.findById(decodedData.adminId)
        if(!admin){
            return res.status(403).json({
                message:"Admin not found"
            })
        }
        req.admin = admin;
        next();
    } catch (error) {
        console.error("Error in authentication ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}