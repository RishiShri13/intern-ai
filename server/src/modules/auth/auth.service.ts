import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
  findUserByEmail,
  createCompany,
  createAdminUser,
} from "./auth.repository";

export const registerCompanyService = async (
  companyName: string,
  adminName: string,
  email: string,
  password: string
) => {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const company = await createCompany(companyName, email);

  const admin = await createAdminUser(
    adminName,
    email,
    hashedPassword,
    company.id
  );

  return {
    company,
    admin,
  };
};

export const loginService = async (
  email: string,
  password: string
) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid Email or Password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      companyId: user.companyId,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    user,
  };
};