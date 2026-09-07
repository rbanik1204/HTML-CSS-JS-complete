import shortId from 'shortid';
import urlModel from '../models/url.model.js'
async function handleViewShortId(req,res,next){
    const body = req.body
    const id = shortId(8);
    const url = req.body.url;
    if(!url)return res.status(400).json({message:"url is required!"})
    const urlInstance = new urlModel({
        shortId : id,
        redirectUrl:url,
        visitHistory:[]
    })
    await urlInstance.save() //Instance method
    return res.status(201).json({message:"successfully shortened url:"+url})
}
async function handleRedirectUrl(req,res,next){
    const sId = req.params.id //string
    console.log(sId)
    const urlInstance = await urlModel.findOneAndUpdate({shortId:sId}
        ,{
            $push:{
                visitHistory:{
                    timestamp:Date.now()
                }
            }
        }
    ) //parses to Mongoose Object
    res.redirect(urlInstance.redirectUrl)
}
async function handleVisitCount(req,res,next){
    const sId = req.params.id;
    const urlInstance = await urlModel.find({shortId:sId}).lean()
    console.log(sId)
    if(!urlInstance) return res.status(400).json({message:sId+" is invalid!"})
    return res.status(200).json({
        visitCount:urlInstance[0].visitHistory.length,
        analytics:urlInstance[0].visitHistory
    })
}

export { handleViewShortId , handleRedirectUrl, handleVisitCount }