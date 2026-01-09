const jwtutils = require("../utils/jwt");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized: No Token"
      });
    }  

    const token = authHeader.split(" ")[1]; 
    const decoded = jwtutils.verifyToken(token);

    if (!decoded || !decoded.id) {
      return res.status(401).json({
        message: "Unauthorized: Invalid token"
      });
    }

    req.user = { _id: decoded.id };

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }
};

module.exports = authMiddleware;

