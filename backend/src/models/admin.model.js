import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    createdCourses:[{
        type:ObjectId,
        ref:'Course'
    }]
})

const Admin = mongoose.model("Admin",adminSchema);

export default Admin;