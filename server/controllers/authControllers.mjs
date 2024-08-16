import create from "prompt-sync";
import User from "../models/user.mjs";
import { v4 as uuidv4 } from "uuid";
import { hashPassword, comparePassword } from "../helpers/auth.mjs";
import jwt from "jsonwebtoken";

export const test = (req, res) => {
  console.log("test is working");
};

const JWT_SECRET = process.env.JWT_SECRET;

//customer register endpoint
export const registerCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check if name was entered
    if (!name) {
      return res.json({ error: "Name is required" });
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

    // Create a unique callId for the seller
    const callId = `client-${uuidv4()}`;

    const hashedPassword = await hashPassword(password);
    //create a user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      callId,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
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
