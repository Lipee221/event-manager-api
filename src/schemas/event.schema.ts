import { z } from 'zod';

export const createEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  location: z.string().min(1),
  date: z.string().datetime(),
  price: z.number().nonnegative(),
  organizerId: z.string().uuid()
});
