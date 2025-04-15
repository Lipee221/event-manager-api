var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createTicket, getAllTickets } from '../services/ticket.service';
export const createTicketController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ticket = yield createTicket(req.body);
        res.status(201).json(ticket);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao criar ticket' });
    }
});
export const getTicketsController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tickets = yield getAllTickets();
        res.status(200).json(tickets);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tickets' });
    }
});
