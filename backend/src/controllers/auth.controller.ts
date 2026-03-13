import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/User";

// Helper
const generateToken = (id: string, role: string): string => {
  return jwt.sign(
    { id, role },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  )
}

// register user
const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    // check if user already exists
    const userExists = await UserModel.exists({ email: req.body.email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const token = generateToken(createdUser._id.toString(), createdUser.role);
    res.status(201).json({
      message: "user created",
      createdUser: { name, email, role },
      token,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: "error creating user",
        error: error.message,
      });
    }
  }
};

// Login user
const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log(email)
    // check if user exists or not
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    const token = generateToken(user._id.toString(), user.role);

    res.status(200).json({
      message: "user logged in",
      user: { name: user.name, email: user.email, role: user.role },
      token,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: "error creating user",
        error: error.message,
      });
    }
  }
};

export { registerUser, loginUser };
