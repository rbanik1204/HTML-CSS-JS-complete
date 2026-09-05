const globalError = (err, req, res, next) => {
    if(err.statusCode != 500)
       return res.send(err.message)
    return res.send("Internal Server Error")
}