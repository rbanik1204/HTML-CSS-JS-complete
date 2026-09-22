export async function handlerHomePage(req,res,next){
    try{
        return res.render("home")
    }
    catch(err){
        next(err)
    }
}