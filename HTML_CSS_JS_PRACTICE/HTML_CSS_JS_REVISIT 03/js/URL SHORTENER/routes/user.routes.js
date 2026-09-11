import express from 'express'
import {handleUserLogIn, handleUserSignUp} from '../controllers/user.controllers.js'
import { checkAuthorization } from '../middlewares/auth.js';
const userRouter = express.Router();

userRouter
    .get('/login',(req,res)=>{
        if(req.headers["authorization"]) return res.redirect('/test')
        return res.render('login')
    })
    .get('/signup',(req,res)=>{
        return res.render('signup')
    })
    .post('/login',handleUserLogIn)
    .post('/signup',handleUserSignUp)

export { userRouter }