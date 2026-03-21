import { NextFunction, Request, Response } from "express";
import ExpertModel from "../models/Expert";
import { AuthRequest } from "../types";

// create expert profile
const createExpertProfile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;

    const expertExist = await ExpertModel.exists({ user: userId });
    if (expertExist) {
      return res.status(400).json({ message: "Expert already exists" });
    }

    const {
      bio,
      company,
      designation,
      education,
      socialLinks,
      sessionTypes,
      availability,
      tags,
      studentBackground,
      portfolioImages,
    } = req.body;

    const createdExpert = await ExpertModel.create({
      user: userId,
      bio,
      company,
      designation,
      education,
      socialLinks,
      sessionTypes,
      availability,
      tags,
      studentBackground,
      portfolioImages,
    });

    res.status(201).json({
      message: "expert created",
      createdUser: createdExpert,
    });
  } catch (err) {
    if (err instanceof Error) {
      res
        .status(500)
        .json({ message: "error creating expert", error: err.message });
    }
  }
};

// expert profile by obj id
const getExpertProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const expertProfile = await ExpertModel.findById(id);
    if (!expertProfile)
      return res.status(404).json({ message: "Expert not found" });

    return res
      .status(200)
      .json({ message: "Expert profile fetched", expertProfile });
  } catch (err) {
    next(err);
  }
};

// get all expert profile
const getAllExpert = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allExpert = await ExpertModel.find({ isVerified: true }); // only verified experts
    if (allExpert.length === 0)
      return res.status(404).json({ message: "no experts found" });

    return res
      .status(200)
      .json({ message: "all expert profile found", allExpert });
  } catch (err) {
    next(err);
  }
};

const updateExpert = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;

    const { id } = req.params;

    // ownership check
    const expertProfile = await ExpertModel.findOne({ _id: id, user: userId });
    if (!expertProfile)
      return res
        .status(403)
        .json({ message: "Not authorized to update this profile" });

    const {
      bio,
      company,
      designation,
      education,
      socialLinks,
      sessionTypes,
      availability,
      tags,
      studentBackground,
      portfolioImages,
    } = req.body;

    const updatedExpert = await ExpertModel.findByIdAndUpdate(
      id,
      {
        // returns null if no expert with 'id' found
        bio,
        company,
        designation,
        education,
        socialLinks,
        sessionTypes,
        availability,
        tags,
        studentBackground,
        portfolioImages,
      },
      { new: true },
    );
    if (!updatedExpert)
      return res.status(404).json({ message: "Expert not found" });
    return res
      .status(200)
      .json({ message: "expert profile updated", updatedExpert });
  } catch (err) {
    next(err);
  }
};

export { createExpertProfile, getExpertProfile, getAllExpert, updateExpert };
