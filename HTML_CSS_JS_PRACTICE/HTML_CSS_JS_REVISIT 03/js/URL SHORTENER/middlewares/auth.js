import {getUser} from '../services/auth.users.js'
async function restrictToLoggedInUsersOnly(req,res,next){
    if(req.url === '/users/login') next()
    const token = req.headers.authorization;
    const tokenValue = token.split("Bearer ")[1]
    console.log(tokenValue)
    if(!tokenValue)
        return res.status(401).redirect("/users/login")
    const user = getUser(tokenValue)
    console.log(user)
    req.user = user;
    console.log(req.user)
    if(!user)
        return res.status(401).redirect("/users/login")
    next()
}

export {restrictToLoggedInUsersOnly}