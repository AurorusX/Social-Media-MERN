import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max:50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max:50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max:50,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        
    },

    picturePath: {
        type: String,
        required: true,
        default: "",       
        
    },
    friends: {
        type: Array,
        default: [],        
    },
    location :String,
    occupation: String,
    viewedprofile: Number,
    impressions:Number,
},
{timestamps:true}
);

const User =mongoose.model("User", UserSchema);

export default User;