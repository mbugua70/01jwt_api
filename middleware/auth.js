const jwt = require("jsonwebtoken");
const UnAuthorized = require("../errors/unauthorized");

const authorizationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnAuthorized("Not authorized, No token was provided");
  }

  // storing token in a variable
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnAuthorized("Not authorized to access this route");
  }
};

module.exports = authorizationMiddleware;
