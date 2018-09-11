// taking three arguments
// request, response, next
// next is called when other middleware is finished
module.exports = (req, res, next ) => {
    if (!req.user) {
        return res.status(401).send({
            error: 'You must log in!'
        });
    }
    next();
}