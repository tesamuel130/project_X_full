import create from "prompt-sync";
import User from "../models/user.mjs";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import { hashPassword, comparePassword } from "../helpers/auth.mjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const test = (req, res) => {
  console.log("test is working");
};

const CLIENT_URL = process.env.CLIENT_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const emailAdd = process.env.EMAIL_ADDR;
const userEmail = process.env.EMAIL_ADDR;
const pass = process.env.EMAIL_PASSWORD;

//customer register endpoint
export const registerCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check if name was entered
    if (!name) {
      return res.json({ error: "Name is required" });
    }

    //check if email is exist
    const nickNameExist = await User.findOne({ name });
    if (nickNameExist) {
      return res.json({ error: "Name is already exist" });
    }

    //check if password is good
    if (!password || password.length < 8) {
      return res.json({
        error: "password is required and must be 8 character",
      });
    }

    //check if email is exist
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email already exist" });
    }

    const hashedPassword = await hashPassword(password);

    // Set verification expiration to one hour from now and generate callId
    const verificationExpiration = new Date(Date.now() + 60 * 60 * 1000);
    const callId = `client-${uuidv4()}`;

    //create a user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      callId,
      verificationExpiration,
    });

    // Generate a verification token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    // Send verification email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: userEmail,
        pass: pass,
      },
    });

    const verifyLink = `${CLIENT_URL}/verify/${token}`;
    const mailOptions = {
      from: emailAdd,
      to: email,
      subject: "Email Verification",
      text: `Please verify your email by clicking the link: ${verifyLink}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      message: "User registered. Check your email for verification link.",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

//user verify email endpoint
export const verifyEmail = async (req, res) => {
  const { token } = req.params;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(400).json({ error: "Invalid token." });
    }

    user.isValidEmail = true;
    await user.save();

    res.status(200).json({ message: "Email verified successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error verifying email." });
  }
};

//customer login endpoint
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "Email or password is incorrect" });
    }

    //check is valid email
    if (!user.isValidEmail) {
      return res.json({ error: "Email not verified" });
    }

    //check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
          return res.json({
            message: "logged in successfully",
          });
        }
      );
    }
    if (!match) {
      res.json({
        error: "Email or password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
