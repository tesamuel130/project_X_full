import User from "../models/user.mjs";

export const paymentStatusSender = async (req, res) => {
  try {
    const { transactions } = req.body;

    const recietImage = req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
    }));

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.transaction.push(...JSON.parse(transactions));
    user.recietImage.push(...recietImage);

    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error("Error saving file:", error);
    res.status(500).json({ error: "Error saving file" });
  }
};
