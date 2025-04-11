import { Request, Response } from 'express';
import { createEvent, getAllEvents } from '../services/event.service';

export const createEventController = async (req: Request, res: Response) => {
  try {
    const event = await createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar evento' });
  }
};

export const getEventsController = async (_req: Request, res: Response) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar eventos' });
  }
};
