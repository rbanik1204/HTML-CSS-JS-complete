import {getUser} from '../services/auth.users.js'
async function restrictToLoggedInUsersOnly(req,res,next){
    // const sessionId = req.cookies.uid;
    const token = req.cookies.uid
    if(!token)
        return res.status(401).redirect("/users/login")
    const user = getUser(token)
    req.user = user;
    console.log(req.user)
    if(!user)
        return res.status(401).redirect("/users/login")
    next()
}
export {restrictToLoggedInUsersOnly}