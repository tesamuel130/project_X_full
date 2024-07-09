import User from "../models/user.mjs";

export const paymentStatusSender = async (req, res) => {
  try {
    const { bankUserName, bankAccountNo, currency, amount, paymentMethod } =
      req.body;

    const recietImage = req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
    }));
  } catch (error) {
    console.error("Error saving file:", error);
    res.status(500).json({ error: "Error saving file" });
  }
};
