import { Router } from 'express';
import { createUserController, getUsersController } from '../controllers/user.controller';
import { createUserSchema } from '../schemas/user.schema';
import { validate } from '../middlewares/validate'; // Middleware para validação
const router = Router();
// Rota para criar um usuário com validação
router.post('/', validate(createUserSchema), createUserController); // Validação e controller
// Rota para obter todos os usuários
router.get('/', getUsersController);
export default router;
