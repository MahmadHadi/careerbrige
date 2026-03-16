import express from "express";
import {
  createBooking,
  getStudentBooking,
  getExpertBooking,
  updateStatus,
} from "../controllers/booking.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const BookingRouter = express.Router();

BookingRouter.post("/", authMiddleware, createBooking);

//! :id is not applied -> getting it from req.user
BookingRouter.get("/student/", authMiddleware, getStudentBooking);
BookingRouter.get("/expert/", authMiddleware, getExpertBooking);

BookingRouter.put("/:id", authMiddleware, updateStatus);

export default BookingRouter;
