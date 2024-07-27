import { getStatusDetails } from "../utils/getStatusDetails";
export const authMiddleware = (req, res, next) => {

    if (!req.session.userId) {
        const statusDetail = getStatusDetails(401)
        return res.status(statusDetail.statusCode).json({ ...statusDetail, responseCode: '0000A' });
    }
    next();
};
