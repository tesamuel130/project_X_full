import jwt from "jsonwebtoken";
import User from "../models/user.mjs";

const JWT_SECRET = process.env.JWT_SECRET; // Replace with your actual secret

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized if no token provided
  }

  jwt.verify(token, JWT_SECRET, async (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden if token is invalid
    }
    try {
      const foundUser = await User.findById(user.id);
      if (!foundUser) {
        return res.sendStatus(404); // User not found
      }

      req.user = {
        id: foundUser._id,
        name: foundUser.name,
        email: foundUser.email,
      };

      next();
    } catch (error) {
      console.error("Error fetching user:", err);
      return res.sendStatus(500);
    }
  });
};

export default authenticateToken;
