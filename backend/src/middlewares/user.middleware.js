import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

export const userAuth = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({
                message:"User not authenticated"
            })
        }
        const decodedData = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decodedData.id)
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        req.userId = user._id;
        next();
    } catch (error) {
        console.error("Error in user middleware ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}