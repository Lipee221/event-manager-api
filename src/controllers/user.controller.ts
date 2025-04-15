import { Request, Response, NextFunction } from 'express';
import { createUser, getUsers } from '../services/user.service'; 


export const createUserController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userData = req.body; 
    const user = await createUser(userData); //
    res.status(201).json(user); 
  } catch (error) {
    next(error);
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers(); 
    res.status(200).json(users); 
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
};

