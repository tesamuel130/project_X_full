import jwt from "jsonwebtoken";

export const getProfile = (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
      next();
    });
  } else {
    res.json(null);
  }
};
