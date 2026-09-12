import express from 'express'
import { handleViewShortId } from '../controllers/urls.controllers.js';
import { restrictUserTo } from '../middlewares/auth.js';
import { viewAllUrls } from '../controllers/urls.controllers.js';
const staticRouter = express.Router();
staticRouter.get('/test',(req,res,next)=>{
    res.render('index')
})
staticRouter.get('/test/admin',restrictUserTo(['ADMIN']),viewAllUrls)

staticRouter.post('/url',handleViewShortId)

export { staticRouter }