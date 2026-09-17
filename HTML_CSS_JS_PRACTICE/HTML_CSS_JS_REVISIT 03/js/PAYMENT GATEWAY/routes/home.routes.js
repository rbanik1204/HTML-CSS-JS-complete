import express from 'express'
const router = express.Router({strict:true})

router
    .get('/home',handleViewHome)

export {router};