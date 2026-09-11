import { getUser } from '../services/auth.users.js'
async function restrictToLoggedInUsersOnly(req, res, next) {
    // const sessionId = req.cookies.uid;
    try {
        const token = req.header
        if (!token)
            return res.status(401).redirect("/users/login")//Authorization: 'Bearer abc123...'
        const tokenValue = token.split("Bearer ")[1];
        const user = getUser(tokenValue)
        if (!user)
            return res.status(401).redirect("/users/login")
        req.user = user;
        console.log(req.user)
        next()
    } catch (error) {
        console.log("Caught the invalid signature error!");
        res.clearCookie("uid");
        return res.status(401).redirect("/users/login");
    }
}
async function checkAuthorization(req,res,next){
    const authHead = req.headers.authorization;
    if(!authHead) return res.render("login")
    const token = authHead.split("Bearer ")[1];
    // console.log(token)
    if(!token) return res.render("login")
    const user = getUser(token)
    if (!user) return res.render("login")
    req.user = user
    req.header = token
    next()
}
export { restrictToLoggedInUsersOnly, checkAuthorization }