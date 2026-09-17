async function handleViewHome(req,res,next){
    try{
        return res.send("Hello from Home page");
    }catch(error){
        error.code = 404,
        error.message= "No content Found"
        next(error) 
    }
}
export default { handleViewHome }