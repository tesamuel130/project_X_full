import create from "prompt-sync";
import User from "../models/user.mjs";
import bycrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { hashPassword, comparePassword } from "../helper/auth.mjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const emailAdd = process.env.EMAIL_ADDR;
const user = process.env.EMAIL_ADDR;
const pass = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

//forget password endpoint function
export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = crypto.randomBytes(32).toString("hex");
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${token}`;
    const mailOptions = {
      from: emailAdd,
      to: email,
      subject: "Password Reset",
      html: `<p>You requested a password reset</p><p>Click this <a href="${resetLink}">link</a> to reset your password.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Email could not be sent" });
      } else {
        console.log("Email sent: " + info.response);
        return res
          .status(200)
          .json({ message: "Reset link sent to your email" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//reset password rout
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;
  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });
    if (!user)
      return res
        .status(400)
        .json({ message: "Token is invalid or has expired" });

    user.password = await hashPassword(newPassword);
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();

    res.status(200).json({ message: "Password has been reset" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
