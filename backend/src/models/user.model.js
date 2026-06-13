import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    enrolledCourses:[{
        type:ObjectId,
        ref:'Course'
    }]
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema);

export default User;
