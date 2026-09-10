import express from 'express'
import {handleUserLogIn, handleUserSignUp} from '../controllers/user.controllers.js'
const userRouter = express.Router();

userRouter
    .get('/login',(req,res)=>{
        return res.render('login')
    })
    .get('/signup',(req,res)=>{
        return res.render('signup')
    })
    .post('/login',handleUserLogIn)
    .post('/signup',handleUserSignUp)

export { userRouter }