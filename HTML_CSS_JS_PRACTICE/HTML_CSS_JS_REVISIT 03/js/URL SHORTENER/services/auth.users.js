import jwt from 'jsonwebtoken'
const secret = "secret1234"
// const sessionIdToUserMap = new Map()

// function setUser(id,user){
//     sessionIdToUserMap.set(id,user)
// }
function setUser(user){
    return jwt.sign({id:user._id,email:user.email},secret)
}

function getUser(token){
    if(!token) return null
    return jwt.verify(token,secret)
}
// function getUser(id){
//     return sessionIdToUserMap.get(id)
// }

export {setUser, getUser}