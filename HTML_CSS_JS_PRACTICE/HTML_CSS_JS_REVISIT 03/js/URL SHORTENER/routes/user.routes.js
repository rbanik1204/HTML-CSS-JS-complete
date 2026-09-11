import express from 'express'
import {handleUserLogIn, handleUserSignUp} from '../controllers/user.controllers.js'
import { checkAuthorization } from '../middlewares/auth.js';
const userRouter = express.Router();

userRouter
    .get('/signup',(req,res)=>{
        return res.render('signup')
    })
    .post('/login',handleUserLogIn)
    .post('/signup',handleUserSignUp)
    .use(checkAuthorization)
    .get('/login',(req,res)=>{
        return res.render('login')
    })

export { userRouter }