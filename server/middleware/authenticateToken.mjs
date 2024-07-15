import jwt from "jsonwebtoken";
import User from "../models/user.mjs";

const JWT_SECRET = process.env.JWT_SECRET; // Replace with your actual secret

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

export default authenticateToken;
