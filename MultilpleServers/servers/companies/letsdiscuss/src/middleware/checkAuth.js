export const checkAuth = async (req, res, next) => {
    try {
        if (req.session.authToken) next();
        else {
            res.status(401).json({ message: "Unauthorized. Please login via itsRIGHTtime." });
        }
    } catch (error) {
        next(error);
    }
}