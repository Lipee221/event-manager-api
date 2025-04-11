import { Request, Response } from 'express';
import { createTicket, getAllTickets } from '../services/ticket.service';

export const createTicketController = async (req: Request, res: Response) => {
  try {
    const ticket = await createTicket(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar ticket' });
  }
};

export const getTicketsController = async (_req: Request, res: Response) => {
  try {
    const tickets = await getAllTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tickets' });
  }
};
