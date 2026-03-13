import { Request } from "express";
import mongoose from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "student" | "expert" | "admin";
  isVerified: boolean;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IExpert {
  user: mongoose.Types.ObjectId;
  bio: string;
  company: string;
  designation: string;
  education: {
    institution: string;
    degree: string;
    field: string;
    year: number;
  }[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  sessionTypes: ("call" | "video" | "in-person")[];
  availability: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
  tags: string[];
  studentBackground: string[];
  portfolioImages: string[];
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}
