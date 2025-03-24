import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    profilePic: { type: String },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    category: {
      type: String,
      enum: ["patient", "doctor", "medical"],
      required: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);


const User = mongoose.model("User", UserSchema);

export default User;