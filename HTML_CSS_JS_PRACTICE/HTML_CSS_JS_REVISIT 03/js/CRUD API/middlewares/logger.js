const logger = (req, res, next) => {
    if(res.path !== "/favicon.ico")
    console.log(req.method + req.path);
    next()
};
module.exports = logger;