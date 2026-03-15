import express from "express";
import {
  createExpertProfile,
  getAllExpert,
  getExpertProfile,
  updateExpert,
} from "../controllers/expert.controller";
import authMiddleware from "../middleware/auth.middleware";

const ExpertRouter = express.Router();

ExpertRouter.post("/", authMiddleware, createExpertProfile)

ExpertRouter.get("/:id", getExpertProfile);
ExpertRouter.get("/", getAllExpert);

ExpertRouter.put("/:id", authMiddleware, updateExpert);

export default ExpertRouter;
