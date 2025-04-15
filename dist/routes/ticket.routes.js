import { Router } from 'express';
import { createTicketController, getTicketsController } from '../controllers/ticket.controller';
const router = Router();
router.post('/', createTicketController);
router.get('/', getTicketsController);
export default router;
