import prisma from "../../prisma/client";

export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
  isOrganizer?: boolean;
}) => {
  return await prisma.user.create({ data });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};
