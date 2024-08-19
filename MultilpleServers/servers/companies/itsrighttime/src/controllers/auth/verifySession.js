
// Middleware to verify if the session is valid
export const verifySession = (req, res, next) => {
    if (!req.session || !req.session.authToken) {
        return res.status(401).json({ message: "Unauthorized. No session or token found." });
    }
    next();
};
