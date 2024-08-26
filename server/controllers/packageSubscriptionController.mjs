import User from "../models/user.mjs";
import Subscription from "../models/Subscription.mjs";
import Package from "../models/Package.mjs";
import dotenv from "dotenv";

dotenv.config();

// TODO: working on the buy pkg
// #add buy pkg and set a logics if it is buy before
export const buyPackage = async (req, res) => {
  const { userId, packageId } = req.body;

  try {
    const user = await User.findById(userId).populate("subscription");
    const pkg = await Package.findById(packageId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!pkg) {
      return res.status(404).json({ message: "Package not found" });
    }

    // Check if the user already has an active or pending subscription
    if (user.subscription && user.subscription.active) {
      return res
        .status(400)
        .json({ message: "You already have an active subscription" });
    }

    // Create a new subscription with admin approval required
    const subscription = new Subscription({
      user: user._id,
      package: pkg._id,
      videosViewed: [],
      startTime: null, // Start time will be set when admin approves
      active: false,
      adminApproved: false,
    });

    await subscription.save();

    // Update user with the new subscription
    user.subscription = subscription._id;
    await user.save();

    res.status(201).json({
      message: "Subscription purchased, awaiting admin approval",
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
