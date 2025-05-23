var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createEvent, getAllEvents } from '../services/event.service';
export const createEventController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield createEvent(req.body);
        res.status(201).json(event);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao criar evento' });
    }
});
export const getEventsController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield getAllEvents();
        res.status(200).json(events);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar eventos' });
    }
});
