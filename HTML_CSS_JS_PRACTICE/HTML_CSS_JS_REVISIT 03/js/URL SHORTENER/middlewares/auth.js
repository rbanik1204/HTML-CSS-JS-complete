import { getUser } from '../services/auth.users.js'
async function restrictToLoggedInUsersOnly(req, res, next) {
    // const sessionId = req.cookies.uid;
    const token = req.headers["Authorization"]
    // console.log(token)
    if (!token)
        return res.status(401).redirect("/users/login")//Authorization: 'Bearer abc123...'
    const tokenValue = token.split("Bearer ")[1];
    try {
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
export { restrictToLoggedInUsersOnly }