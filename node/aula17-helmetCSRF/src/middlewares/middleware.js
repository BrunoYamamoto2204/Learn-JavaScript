exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "Este é o valor da variável local";
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfErro = (req, res, next) => {
    if(err && err.code === "EBADCSRFTOKEN") {
        return res.render("404");
    }
}

exports.csrfMiddleware = (err, req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}
