import bcrypt from "bcryptjs";

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