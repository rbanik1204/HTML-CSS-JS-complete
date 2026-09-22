export function globalError(err,req,res,next){
    return res
        .status(err.statusCode||err.status || 500)
        .json({
            success:false,
            message:res.message|| "Internal Server Error",
            stack:process.env.NODE_ENV === "development" ? err.stack:undefined
        })
}