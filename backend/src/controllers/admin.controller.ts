import UserModel from "../models/User";
import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "../types";
import ExpertModel from "../models/Expert";
import errorHandler from "../middleware/error.middleware";

const getAllUsers = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allUsers = await UserModel.find().select("-password");
    if (allUsers.length === 0)
      return res.status(404).json({ message: "no users found " });

    res.status(200).json({ message: "all users fetched", allUsers });
  } catch (err) {
    next(err);
  }
};

const getAllExpert = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allExpert = await ExpertModel.find().select("-password");
    if (allExpert.length === 0)
      return res.status(404).json({ message: "no experts found" });

    return res
      .status(200)
      .json({ message: "all expert profile found", allExpert });
  } catch (err) {
    next(err);
  }
};

const verifyExpert = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const verifiedExpert = await ExpertModel.findByIdAndUpdate(
      id,
      {
        isVerified: true,
      },
      { new: true },
    );
    if (!verifiedExpert)
      return res
        .status(404)
        .json({ message: "error verifying expert | no expert found" });

    return res.status(200).json({ message: "expert verified successfully " });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser)
      return res
        .status(404)
        .json({ message: "error deleting user | no user found" });

    return res.status(200).json({ message: "user deleted successfully " });
  } catch (err) {
    next(err);
  }
};

export { getAllUsers, getAllExpert, verifyExpert, deleteUser };
