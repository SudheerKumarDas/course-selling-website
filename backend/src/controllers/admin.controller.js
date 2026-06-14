import bcrypt from "bcrypt";

import Admin from "../models/admin.model.js";
import Course from "../models/course.model.js";
import { generateToken } from "../utils/generateToken.js";

export const adminSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({
        message: "username, email and password are required",
      });
    }

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(409).json({
        message: "Admin already registered...",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const admin = await Admin.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const token = await generateToken(admin._id);

    const adminResponse = {
      id: admin._id,
      username: admin.username,
      email: admin.email,
    };

    res.status(201).json({
      success: true,
      message: "Admin signed up successfully",
      admin: adminResponse,
      token: token,
    });
  } catch (error) {
    console.log("Error signing up :", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const adminSignin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(403).json({
        message: "Invalid credentials",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (!isPasswordMatch) {
      return res.status(403).json({
        message: "Invalid credentials",
      });
    }

    const token = await generateToken(admin._id);

    const adminResponse = {
      adminId: admin._id,
      username: admin.username,
      email: admin.email,
    };

    res.status(200).json({
      message: "Login successfully",
      token: token,
      admin: adminResponse,
    });
  } catch (error) {
    console.log("Error in signing in ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const adminCreateCourse = async (req,res) => {
  try {
      const {title,description,price,imageLink,published} = req.body;
      if(!title || !description || !price || !imageLink || !published){
        return res.status(400).json({
          message:"Not enough data to create course"
        })
      }
      console.log(title);
      const course = await Course.create({
        title,
        description,
        price,
        imageLink,
        published
      })
      res.status(201).json({
        message:"Course created",
        course:course
      })
  } catch (error) {
    console.error("Error in creating course ",error);
    res.status(500).json({
      message:"Internal server error"
    })
  }
}

export const updateCourse = async (req,res) => {
  try {
      const { courseId } = req.params;
      const updatedData = req.body;
      console.log(updatedData)

      const updatedCourse = await Course.findByIdAndUpdate(
        courseId,
        updatedData,
        {
          returnDocument:'after',
          runValidators:true
        }
      )

      if(!updateCourse){
        return res.status(404).json({
          message:"Course with the id not found"
        })
      }

      res.status(200).json({
        message:"course updated successfully",
        updatedCourse:updatedCourse
      })
  } catch (error) {
      console.error("Failed to fetch all the courses ",error);
      res.status(500).json({
        message:"Internal server error"
      })
  }
}

export const getAllCourses = async (req,res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({
      message:"fetched the courses successfully",
      courses:courses
    })
  } catch (error) {
    console.error("Failed to fetch all the courses ",error);
    res.status(500).json({
      message:"Internal server error"
    })
  }
}