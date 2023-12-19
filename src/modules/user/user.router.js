import express from 'express'
import {SignIn , SignUp , updateUser, deleteUser, getUsers, getUserslike, getUsersage, getOldestUser, SearchUsers} from './user.controller.js'
const userRouter = express.Router();

//Sign Up //Sign in 
userRouter.post('/SignUP',SignUp).post('/SignIn',SignIn)
//update User 
userRouter.put('/User/:id',updateUser)
//delete User 
userRouter.delete('/User/:id',deleteUser)
// get all user //get all users with start with a and age less than 30 // get users with age between 20 and 30 //users oldest 3  age //search user by list id 
userRouter.get('/Users',getUsers).get('/Userslike',getUserslike).get('/Usersage',getUsersage).get('/OldestUser',getOldestUser).get('/searchUser',SearchUsers)     





export default userRouter 