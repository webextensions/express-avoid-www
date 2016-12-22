var avoidWww = function () {
    return function (req, res, next) {
        if (req.get('host').match(/^www\./i)) {
            var redirectToUrl = req.protocol + '://' + req.get('host').replace(/^www\./, '') + req.originalUrl;
            return res.redirect(301, redirectToUrl);
        }
        next();
    };
};
module.exports = avoidWww;
