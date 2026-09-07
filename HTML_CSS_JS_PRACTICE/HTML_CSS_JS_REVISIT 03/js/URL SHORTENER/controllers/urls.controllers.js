import shortId from 'shortid';
import urlModel from '../models/url.model.js'
async function handleViewShortId(req,res,next){
    const body = req.body
    const id = shortId(8);
    let url = req.body.url;
    let redirectUrl = req.body.redirectURL
    let flag = 0
    if(!url){
        url=redirectUrl;flag = 1
        }
    else redirectUrl = url
    console.log(redirectUrl)
    if(!(url|| redirectUrl))return res.status(400).json({message:"url is required!"})
    const urlInstance = new urlModel({
        shortId : id,
        redirectUrl:redirectUrl,
        visitHistory:[]
    })
    await urlInstance.save() //Instance method
    if(!flag)
        return res.status(201).json({message:"successfully shortened url:"+url,
            shortenedID:id
        })
    else
        return res.status(201).render('index',{
            id:id
        })
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
async function viewAllUrls(req,res,next){
    const urls = await urlModel.find({}) //returns array of query object

} 
export { handleViewShortId , handleRedirectUrl, handleVisitCount }