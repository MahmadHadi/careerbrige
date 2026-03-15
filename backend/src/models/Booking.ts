import mongoose from "mongoose";
import { IBooking } from "../types";

const BookingSchema = new mongoose.Schema<IBooking>({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  expert: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Expert",
    required: true,
  },
  session_type: {
    required: true,
    type: String,
    enum: ["call", "video", "in-person"],
  },
  meeting_url: String,
  location: String,
  date: {
    type: Date,
    required: true,
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: Date,
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending",
  },
  student_message: String,
});

const BookingModel =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export default BookingModel;
