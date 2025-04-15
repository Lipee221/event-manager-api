import prisma from "../prisma/client";

export const createEvent = async (data: {
  title: string;
  description: string;
  location: string;
  date: Date;
  price: number;
  organizerId: string;
}) => {
  return await prisma.event.create({ data });
};

export const getAllEvents = async () => {
  return await prisma.event.findMany({
    include: {
      organizer: true,
    },
  });
};
