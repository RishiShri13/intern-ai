import { Request, Response } from "express";

import {
  registerCompanyService,
  loginService,
} from "./auth.service";




export const registerCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      companyName,
      adminName,
      email,
      password,
    } = req.body;

    const result = await registerCompanyService(
      companyName,
      adminName,
      email,
      password
    );

    res.status(201).json({
      success: true,
      message: "Company registered successfully",
      data: result,
    });

  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Internal Server Error";

    res.status(400).json({
      success: false,
      message,
    });
  }
};

export const login = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const result = await loginService(
      email,
      password
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token: result.token,
      user: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
        role: result.user.role,
        companyId: result.user.companyId,
      },
    });

  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Internal Server Error";

    res.status(400).json({
      success: false,
      message,
    });
  }
};