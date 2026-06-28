import { NextFunction, Response } from "express";
import { AuthRequest } from "../types";

import BookingModel from "../models/Booking";

// create booking
const createBooking = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    console.log("req.body", req.body);
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const student = req.user.id;

    const {
      expert,
      session_type,
      meeting_url,
      location,
      date,
      start_time,
      end_time,
      student_message,
    } = req.body;
    const conflict = await BookingModel.findOne({
      // to check double booking
      expert,
      date,
      status: { $in: ["pending", "confirmed"] },
      start_time: { $lt: end_time },
      end_time: { $gt: start_time },
    });

    if (conflict)
      return res
        .status(409)
        .json({ message: "Expert is not available at this time" });

    const createdBooking = await BookingModel.create({
      student,
      expert,
      session_type,
      meeting_url,
      location,
      date,
      start_time,
      end_time,
      student_message,
    });

    if (!createdBooking)
      return res.status(400).json({ message: "error creating booking" });

    return res
      .status(200)
      .json({ message: "booking created successfully", createdBooking });
  } catch (error) {
    next(error);
  }
};

// get student booking
const getStudentBooking = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const student = req.user.id;

    const studentBooking = await BookingModel.find({ student });

    if (studentBooking.length === 0)
      return res.status(200).json({ message: "no booking found" });
    return res
      .status(200)
      .json({ message: "all booking fetched", studentBooking });
  } catch (error) {
    next(error);
  }
};

// get expert booking
const getExpertBooking = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const expert = req.user.id;

    const expertBooking = await BookingModel.find({ expert });

    if (expertBooking.length === 0)
      return res.status(200).json({ message: "no booking found" });
    return res
      .status(200)
      .json({ message: "all booking fetched", expertBooking });
  } catch (error) {
    next(error);
  }
};

// update status by expert
const updateStatus = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const { id } = req.params;

    const allowedStatus = ["confirmed", "cancelled", "completed"];
    if (!allowedStatus.includes(req.body.status))
      return res.status(400).json({ message: "Invalid status value" });

    const updatedBooking = await BookingModel.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      { new: true },
    );
    if (!updatedBooking)
      return res.status(404).json({ message: "booking not found" });

    return res.status(200).json({ message: "status updated", updatedBooking });
  } catch (error) {
    next(error);
  }
};

export { createBooking, getStudentBooking, getExpertBooking, updateStatus };
