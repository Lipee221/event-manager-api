import { Router } from 'express';
import { createUserController, getUsersController } from '../controllers/user.controller'; 
import { createUserSchema } from '../schemas/user.schema';
import { validate } from '../middlewares/validate'; 

const router = Router();


router.post('/', validate(createUserSchema), createUserController); 


router.get('/', getUsersController);

export default router;
