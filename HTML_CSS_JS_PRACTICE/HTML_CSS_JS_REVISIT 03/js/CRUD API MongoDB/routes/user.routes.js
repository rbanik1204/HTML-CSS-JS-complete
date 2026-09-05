const express = require('express')
const {getUsers, createUsers} = require("../controllers/user.controllers")
const router = express.Router();

router("api/users")
    .get(getUsers)
    .post(createUsers)


module.exports = router