import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha precisa ter no mínimo 6 caracteres"),
  isOrganizer: z.boolean().optional()
});
