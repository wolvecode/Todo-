exports.handleError = (error, req, res, next) => {
    if (error.status >= 400 && error.status <= 499) {
        return res.status(error.status || 404).json({
            errorMessage: error.message
        })
   }

   next(error)
}

exports.handleServerError = (error, req, res, next) => {
    res.status(error.status || 503).json({
        msg: 'Server temporary unavailable'
    })
}