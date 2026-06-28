import express from "express";
import {
  createBooking,
  getStudentBooking,
  getExpertBooking,
  updateStatus,
} from "../controllers/booking.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import validate from "../middleware/validate.middleware";
import {
  bookingSchema,
  updateStatusSchema,
} from "../validators/booking.validator";

const BookingRouter = express.Router();

BookingRouter.post("/", authMiddleware, validate(bookingSchema), createBooking);
// BookingRouter.post("/", authMiddleware, createBooking);

//! :id is not applied -> getting it from req.user
BookingRouter.get("/student/", authMiddleware, getStudentBooking);
BookingRouter.get("/expert/", authMiddleware, getExpertBooking);

BookingRouter.put(
  "/:id",
  authMiddleware,
  validate(updateStatusSchema),
  updateStatus,
);

export default BookingRouter;
