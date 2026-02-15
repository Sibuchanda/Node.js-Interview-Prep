import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   email: {
    type: String,
    required: true,
    unique: true
   },
   name: {
    type: String,
    required: true
   },
   age:{
     type: Number,
     required: true
   }
});

const User = new mongoose.model("User", userSchema);

export default User;