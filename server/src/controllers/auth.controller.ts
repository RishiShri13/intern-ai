import { Request, Response } from "express";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
  data: {
    name,
    email,
    password: hashedPassword,
  },
});

  res.status(201).json({
  success: true,
  message: "User Registered Successfully",
  user,
});
};

export const login = async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Login API Working 🚀",
  });
};
