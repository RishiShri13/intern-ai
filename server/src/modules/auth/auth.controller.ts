import { Request, Response } from "express";

import { registerCompanyService } from "./auth.service";

export const registerCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { companyName, adminName, email, password } = req.body;

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
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};