import {getId} from '../services/auth.users.js'
async function restrictToLoggedInUsersOnly(req,res,next){
    const sessionId = req.cookies.uid;
    if(!sessionId)
        return res.status(401).redirect("/users/login")
    const user = getId(sessionId)
    req.user = user;
    console.log(req.user)
    if(!user)
        return res.status(401).redirect("/users/login")
    next()
}
export {restrictToLoggedInUsersOnly}