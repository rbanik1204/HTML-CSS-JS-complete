import { userModel } from '../models/user.model.js'
// import { v4 as uuidv4 } from 'uuid'
import { setUser, getUser } from '../services/auth.users.js'
async function handleUserLogIn(req, res, next) {
    try {
        const body = req.body;
        const user = await userModel.findOne({
            $and: [{
                username: body.username
            },
            { password: body.password }]
        })
        if (!user) return res.status(422).render('login', {
            message: "Please sign up with the below link"
            , url: "signup"
        })
        // const sessionId = uuidv4()
        // setUser(sessionId, user)
        const token = setUser(user)
        req.user = user
        // res.cookie("uid", token);
        res.setHeader("token",`${token}`)
        return res.status(201).json({token})
        // return res.redirect("/test")
    }
    catch (error) {
        next(error)
    }
}

async function handleUserSignUp(req, res, next) {
    try {
        const body = req.body;
        // Mongoose Document instance . Stored in Nodes process memory 
        const userInstance = new userModel({
            username: body.username,
            email: body.email,
            password: body.password
        })
        const existingUser = await userModel.findOne({ username: userInstance.username, email: userInstance.email })
        if (!existingUser) {
            await userInstance.save();
        }
        else {
            return res.render('signup', {
                message: 'User already exists. Please Login',
                url: 'http://[::1]/users/login'
            })
        }
        // const sessionId = uuidv4();
        // setUser(sessionId, userInstance)
        const token = setUser(userInstance)
        console.log("I'm inside user.controller:\n", getUser(token))
        res.cookie("uid", token)
        // return res.render('index',{
        //     message:"Successfully signed up!"
        // });//Double submit problem
        return res.redirect('/test')//GET request on /test
    }
    catch (error) {
        next(error)
    }
}

export { handleUserLogIn, handleUserSignUp }