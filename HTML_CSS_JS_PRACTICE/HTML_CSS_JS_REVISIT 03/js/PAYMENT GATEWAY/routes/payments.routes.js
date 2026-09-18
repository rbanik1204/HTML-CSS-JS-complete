import express from 'express'
import { createOrder } from '../controllers/payments.controllers.js'

const router = express.Router();
router
    .post('/create-order',createOrder)

export {router}