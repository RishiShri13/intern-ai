import prisma from "../../lib/prisma";

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const createCompany = async (
  companyName: string,
  companyEmail: string
) => {
  return prisma.company.create({
    data: {
      name: companyName,
      email: companyEmail,
    },
  });
};

export const createAdminUser = async (
  name: string,
  email: string,
  password: string,
  companyId: string
) => {
  return prisma.user.create({
    data: {
      name,
      email,
      password,
      role: "COMPANY_ADMIN",
      companyId,
    },
  });
};