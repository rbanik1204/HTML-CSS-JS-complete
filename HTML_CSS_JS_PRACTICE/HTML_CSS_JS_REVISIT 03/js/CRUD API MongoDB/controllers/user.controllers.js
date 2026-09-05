const { default: mongoose } = require("mongoose");
const Users = require("../models/users")
const getUsers = async (req, res, next) => {
    try {
        const users = await Users.find();
        const html = `
        ${users.map((user) => {
            return `<li>${user.firstName} ${user.lastName} ${user.email}</li>`
        })
                .join("")
            }
        `
        return res.status(200).send(html)
    }
    catch (error) {
        error.code = error.statusCode || 500;
        next(error)
    }
}
const getUser = async (req, res, next) => {
    const { id } = req.params;
    //Validating the format of id first
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({ message: "Invalid ObjectId format structure provided" })
    try {
        const user = await Users.findById(id)// Mongoose automatically casts valid String into ObjectId in findById and find
        //However findById returns a single Mongoose instance hence indexing property accession possible and if no user then returns null
        // In case of find , it returns an array . If no user exists , returns empty array
        if (!user)
            return res.status(400).json({ message: "User not found" })
        return res.status(200).json({ message: "users retrieved successfully" ,body:user})
    }
    catch (error) {
        error.code = error.statusCode || 500;
        next(error)
    }
}
const createUsers = async (req, res, next) => {
    try {
        await Users.insertMany(req.body) //compiled class constructor of which insertMany is an interface method
        const users = await Users.find()
            .sort({ _id: -1 })
            .limit(5);
        if(users.length === 0)
            return res.status(204).json({message:"No content in retrievd Array of Mongoose Instances"})
        return res.status(201).json({
            message: "successful creation of " + req.body.length + " documents",
            body: users //must return mongoose instance or object 
        })
    }
    catch (error) {
        error.code = error.statusCode || 500;
        next(error)
    }
}
const createUser = async (req, res, next) => {
    try {
        await Users.create(req.body) //any Mongoose constructor accepts native js objects only (or array of objects)
        const user = await Users.find().sort({ _id: -1 }).limit(1)
        res.status(201).json({
            message: "successful creation query!",
            body: user
        })//stringifies it and sends the response to client
    }
    catch (error) {
        error.code = error.statusCode || 500;
        next(error)
    }
}
const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    //Validation of id
    if (!mongoose.Types.ObjectId.isValid(id))//or mongoose.isValidObjectId(id) or mongoose.isObjectIdOrHexString(id) 
        return res.status(400)
    try {
        const user = await Users.findById(id);
        if (!user)
            return res.status(400).json({ message: "user not found" });
        await Users.deleteOne(user);
        if (!Users.findById(id))
            return res.status(204).json({ message: "Successful deletion No content" })
    }
    catch (error) {
        error.code = error.statusCode || 500;
        next(error)
    }
}
const deleteUsers = async (req, res, next) => {
    let ids = []
    try {
        for (const user of req.body) {//dont use for in since it will assume the array as object and will return String index like "1" "0"
            if (!mongoose.Types.ObjectId.isValid(user.id))
                continue;
            // id+=user.id this is wrong will cast it to String and concatenate from there onwards
            ids.push(user.id);
        }
        await Users.deleteMany(
            {
                _id: {
                    $in: ids
                }
            }
        )
        return res.status(204).json({userIds:ids,message:"Instances deleted successfully"})
    }
    catch (error) {
        error.code = error.statusCode || 500;
        next(error)
    }
}
const updateUser = async (req, res, next) => {
    const { id } = req.params;
    //Validation of user id
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({ message: "Bad request: malformed syntax" })
    const fields = req.body;
    //fields validation
    for (const key of Object.keys(fields)) {//do not use forEach Loop
        let isValidField = Users.schema.path(key) !== undefined;
        if (!isValidField)
            return res.status(400).json({ message: "requested field " + key + " is invalid" })
    }
    if (Object.keys(fields).length === 0)
        return res.status(400).json({ message: "Bad request: No fields provided to update" })
    try {
        const updatedUser = await Users.findOneAndUpdate(
            { _id: id }, {
            $set: properties
        }, {
            new: true
            , runValidators: true
        })
        if (!updatedUser)
            return res.status(404).json({ message: "user not found" })
        return res.status(200).json({ message: "user " + id + " updated successfully", body: updatedUser })
    }
    catch (error) {
        error.code = error.statusCode || 500;
        next(error)
    }
}
const updateUsers = async (req, res, next) => {
    const { ...qParams } = req.query;
    //Query parameters validation
    if (Object.keys(qParams).length === 0)
        return res.status(400).json({ message: "Bad request: No fields provided to update" })
    for (const key of Object.keys(qParams)) {//do not use forEach Loop
        const isValidField = Users.schema.path(key) !== undefined;
        if (!isValidField)
            return res.status(400).json({ message: "requested field " + key + " is invalid" })
    }
    const users = await Users.find(qParams)
    //Request Body validation
    const fieldValues = req.body
    //fields validation
    for (const field of Object.keys(fieldValues)) {//do not use forEach Loop
        const isValidField = Users.schema.path(field) !== undefined;
        if (!isValidField)
            return res.status(400).json({ message: "requested field " + key + " is invalid" })
    }
    try {
        for (const user of users) {
            Object.assign(user, fieldValues)
            await user.save();  // Save each updated user document back to the database
        }
        return res.status(200).json({ message: "users updated successfully", fields: fieldValues, body: users })
    }
    catch (error) {
        error.code = error.statusCode || 500;
        next(error)
    }
}
module.exports = {
    getUsers,
    getUser,
    createUsers,
    createUser,
    deleteUser,
    deleteUsers,
    updateUser,
    updateUsers
}