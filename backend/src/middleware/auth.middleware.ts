import { Response, NextFunction } from "express";
import { AuthRequest } from "../types";

import jwt from "jsonwebtoken";

const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization || req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Invalid token format." });
  }

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as { id: string; role: string };

    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
