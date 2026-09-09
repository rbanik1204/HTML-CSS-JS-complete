import express from 'express'
import {handleUserLogIn, handleUserSignIn} from '../controllers/user.controllers.js'
const userRouter = express.Router();

userRouter
    .get('/login',(req,res)=>{
        return res.render('login')
    })
    .get('/signup',(req,res)=>{
        return res.render('signup')
    })
    .post('/login',handleUserLogIn)
    .post('/signup',handleUserSignIn)

export { userRouter }