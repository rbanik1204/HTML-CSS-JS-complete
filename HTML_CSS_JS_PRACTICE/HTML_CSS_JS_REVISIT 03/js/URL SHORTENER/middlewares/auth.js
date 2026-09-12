import {getUser} from '../services/auth.users.js'
async function restrictToLoggedInUsersOnly(req,res,next){
    if(req.url === '/users/login') next()
    const token = req.headers.authorization;
    const tokenValue = token.split("Bearer ")[1]
    if(!tokenValue)
        return res.status(401).redirect("/users/login")
    const user = getUser(tokenValue)
    req.user = user;
    if(!user)
        return res.status(401).redirect("/users/login")
    next()
}

async function restrictUserTo(roles = []){
    return function (req,res,next){
        if(!req.user) return res.redirect('/users/login')
        if(!roles.includes(req.user.role))return res.status(401).end("unauthorized")
        next()
    }
}

export {restrictToLoggedInUsersOnly, restrictUserTo}