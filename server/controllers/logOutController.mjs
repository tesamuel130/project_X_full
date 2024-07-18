export const logOutHandler = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
};
