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

//get payment options function
export const paymentOptions = async (req, res) => {
  try {
    const paymentOptions = ["cbe", "boa", "coop"];
    res.status(200).json(paymentOptions);
  } catch (error) {
    console.error("Error fetching payment options:", error);
    res.status(500).json({ error: "Error fetching payment options" });
  }
};

//get currency options function
export const currencyOptions = async (req, res) => {
  try {
    const currencies = ["etb", "usd", "cad"];
    res.status(200).json(currencies);
  } catch (error) {
    console.error("Error fetching currencies:", error);
    res.status(500).json({ error: "Error fetching currencies" });
  }
};
