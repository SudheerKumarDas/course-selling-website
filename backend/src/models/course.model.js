import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageLink:{
        type:String,
    },
    published:{
        type:Boolean,
        required:true
    }
})

const Course = mongoose.model("Course",courseSchema);

export default Course;