import prisma from "../prisma/client";

export const createTicket = async (data: {
  userId: string;
  eventId: string;
}) => {
  return await prisma.ticket.create({ data });
};

export const getAllTickets = async () => {
  return await prisma.ticket.findMany({
    include: {
      user: true,
      event: true,
    },
  });
};
