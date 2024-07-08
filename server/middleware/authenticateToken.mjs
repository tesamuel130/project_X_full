import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET; // Replace with your actual secret

const authenticateToken = (req, res, next) => {
  const token = req.headers["access-token"];
  const authHeader = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized if no token provided
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden if token is invalid
    }
    req.userId = user.id;
    next(); // Proceed to next middleware or route handler
  });
};

export default authenticateToken;
