const globalError = (err, req, res, next) => {
    return res.json({
            code: err.code || 500,
            message: err.message || "Internal Server Error"
        })
}
export { globalError }