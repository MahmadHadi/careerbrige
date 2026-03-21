import express from "express";
import {
  createExpertProfile,
  getAllExpert,
  getExpertProfile,
  updateExpert,
} from "../controllers/expert.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import validate from "../middleware/validate.middleware";
import {
  expertSchema,
  updateExpertSchema,
} from "../validators/expert.validator";

const ExpertRouter = express.Router();

ExpertRouter.post(
  "/",
  authMiddleware,
  validate(expertSchema),
  createExpertProfile,
);

ExpertRouter.get("/:id", getExpertProfile);
ExpertRouter.get("/", getAllExpert);

ExpertRouter.put(
  "/:id",
  authMiddleware,
  validate(updateExpertSchema),
  updateExpert,
);

export default ExpertRouter;
