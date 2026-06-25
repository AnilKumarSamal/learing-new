import { Router } from 'express';
import { handleCreateUser,handleGetUsers,handleUpdateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
const router = Router();

router.post('/', handleCreateUser);
router.get('/',verifyToken, handleGetUsers);
// router.get('/:id', handleGetUserById);
router.put('/:id',verifyToken, handleUpdateUser);
// router.delete('/:id', handleDeleteUser);

export default router;