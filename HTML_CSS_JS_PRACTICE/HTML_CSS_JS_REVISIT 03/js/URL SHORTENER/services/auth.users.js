const sessionIdToUserMap = new Map()

function setId(id,user){
    sessionIdToUserMap.set(id,user)
}

function getId(id){
    return sessionIdToUserMap.get(id)
}

export {setId, getId}