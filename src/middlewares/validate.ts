import { Request, Response, NextFunction } from 'express';

export const validate = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync(req.body);
      next(); 
    } catch (error) {
      res.status(400).json({ error: error.errors.map((e: any) => e.message).join(', ') }); 
    }
  };
};
