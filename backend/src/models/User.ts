import mongoose from "mongoose";
import { IUser } from "../types"

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      unique: true,
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    role: {
      required: true,
      type: String,
      enum: ["student", "admin", "expert"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
