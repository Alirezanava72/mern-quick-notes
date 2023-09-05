module.exports = function(req, ers, next) {
    if(!req.user) return res.status(401).json('Unauthorised');
    next();
};