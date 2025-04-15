import { Request, Response } from 'express';
import {prisma} from '../lib/prisma'
import { comparePasswords } from '../utils/hash';
import { generateToken } from '../utils/jwt';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  const isValid = await comparePasswords(password, user.password);
  if (!isValid) return res.status(401).json({ error: 'Senha incorreta' });

  const token = generateToken({ userId: user.id });
  return res.json({ token });
};
