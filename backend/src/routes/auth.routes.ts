import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";
import validate from "../middleware/validate.middleware";
import { loginSchema, registerSchema } from "../validators/auth.validator";

const AuthRouter = express.Router();

AuthRouter.post("/register", validate(registerSchema), registerUser);

AuthRouter.post("/login", validate(loginSchema), loginUser);

export default AuthRouter;
