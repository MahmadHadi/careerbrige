import express from "express";

import {
  getAllUsers,
  getAllExpert,
  verifyExpert,
  deleteUser,
} from "../controllers/admin.controller";
import { adminMiddleware, authMiddleware } from "../middleware/auth.middleware";

const AdminRouter = express.Router();

AdminRouter.get("/", authMiddleware, adminMiddleware, getAllUsers);
AdminRouter.get("/all-expert", authMiddleware, adminMiddleware, getAllExpert);

AdminRouter.put(
  "/verify-expert/:id",
  authMiddleware,
  adminMiddleware,
  verifyExpert,
);
AdminRouter.delete("/user/:id", authMiddleware, adminMiddleware, deleteUser);

export default AdminRouter;
