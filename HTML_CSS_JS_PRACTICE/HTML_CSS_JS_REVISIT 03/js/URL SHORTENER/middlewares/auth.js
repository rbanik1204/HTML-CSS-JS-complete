import {getUser} from '../services/auth.users.js'
async function restrictToLoggedInUsersOnly(req,res,next){
    if(!req.cookies.token) return next()
    const tokenCookie = req.cookies?.token //null check
    if(!tokenCookie)
        return res.status(401).redirect("/users/login")
    const user = getUser(tokenCookie)
    req.user = user;
    if(!user)
        return res.status(401).redirect("/users/login")
    next()
}

function restrictUserTo(roles = []){
    return function (req,res,next){
        if(!req.user) return res.redirect('/users/login')
        if(!roles.includes(req.user.role))return res.status(401).end("unauthorized")
        next()
    }
}

export {restrictToLoggedInUsersOnly, restrictUserTo}