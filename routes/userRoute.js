import express from 'express'
import { approveUser, deleteUser, getAllUsers, getUserById, loginUser, registerUser, updateUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post("/login",loginUser)
userRouter.post("/register",registerUser)
userRouter.get("/user",getAllUsers)
userRouter.get('/user/:id', getUserById);
userRouter.put('/user/:id', updateUser);
userRouter.put('/status/:id', approveUser); 
userRouter.delete('/user-delete/:id', deleteUser);


export default userRouter