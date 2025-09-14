function validateUserAuth(req, res, next) {
    // Example validation logic
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'Email and password are required',
            data: {},
            success: false,
            err: {}
        });
    }
    next();
}

module.exports = {
    validateUserAuth
};