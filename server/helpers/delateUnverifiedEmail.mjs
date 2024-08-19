import cron from "node-cron";
import User from "../models/user.mjs";

const deleteUnverifiedUsers = async () => {
  try {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    await User.deleteMany({
      isValidEmail: false,
      createdAt: { $lt: oneHourAgo },
    });
  } catch (error) {
    console.error("Error deleting unverified users:", error);
  }
};

// Schedule the task to run every hour
cron.schedule("* * * * *", deleteUnverifiedUsers);
