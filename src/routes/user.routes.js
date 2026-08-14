import express from 'express'
import userController from '../controllers/user.controllers'
const router=express.Router();



router.get("/users",userController.getUsers);

 
router.get("/users/:usersId",userController.getUserByID);

export default router;