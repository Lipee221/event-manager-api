import { Router } from 'express';
import { createUserController, getUsersController } from '../controllers/user.controller';
import { createUserSchema } from '../schemas/user.schema';
import { validate } from '../middlewares/validate';
import { createUser } from '../services/user.service';

const router = Router();

router.post('/', validate(createUserSchema), createUser);
router.post('/', createUserController);
router.get('/', getUsersController);

export default router;
