import {Router} from 'express'
import { handlerHomePage } from '../controllers/home.controllers.js';
const router = Router()

router
    .get('/home',handlerHomePage);
export default router