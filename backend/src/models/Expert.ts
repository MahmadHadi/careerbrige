import mongoose from "mongoose";
import { IExpert } from "../types";

const ExpertSchema = new mongoose.Schema<IExpert>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  bio: {
    required: true,
    type: String,
  },
  company: {
    required: true,
    type: String,
  },
  designation: {
    required: true,
    type: String,
  },
  education: [
    {
      institution: String,
      degree: String,
      field: String,
      year: Number,
    },
  ],
  socialLinks: {
    linkedin: String,
    twitter: String,
    website: String,
  },
  sessionTypes: [{ type: String, enum: ["call", "video", "in-person"] }],
  availability: [
    {
      day: String,
      startTime: String,
      endTime: String,
    },
  ],
  tags: [String],
  studentBackground: [String],
  portfolioImages: [String],
});

const ExpertModel =
  mongoose.models.Expert || mongoose.model("Expert", ExpertSchema);

export default ExpertModel;
