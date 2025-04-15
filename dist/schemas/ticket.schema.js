import { z } from 'zod';
export const createTicketSchema = z.object({
    userId: z.string().uuid(),
    eventId: z.string().uuid()
});
