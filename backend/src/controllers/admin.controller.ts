import UserModel from "../models/User";
import { Request, Response } from "express";
import { AuthRequest } from "../types";
import ExpertModel from "../models/Expert";

const getAllUsers = async (req: AuthRequest, res: Response) => {
  try {
    const allUsers = await UserModel.find().select("-password");
    if (allUsers.length === 0)
      return res.status(404).json({ message: "no users found " });

    res.status(200).json({ message: "all users fetched", allUsers });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: "error creating user",
        error: error.message,
      });
    }
  }
};

const getAllExpert = async (req: Request, res: Response) => {
  try {
    const allExpert = await ExpertModel.find().select("-password");
    if (allExpert.length === 0)
      return res.status(404).json({ message: "no experts found" });

    return res
      .status(200)
      .json({ message: "all expert profile found", allExpert });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Error fetching all expert profile",
        error: err.message,
      });
    }
  }
};

const verifyExpert = async (req: AuthRequest, res: Response) => {
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
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Error fetching all expert profile",
        error: err.message,
      });
    }
  }
};

const deleteUser = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser)
      return res
        .status(404)
        .json({ message: "error deleting user | no user found" });

    return res.status(200).json({ message: "user deleted successfully " });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Error fetching all expert profile",
        error: err.message,
      });
    }
  }
};

export { getAllUsers, getAllExpert, verifyExpert, deleteUser };
