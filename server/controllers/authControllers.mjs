import create from "prompt-sync";
import user from "../models/user.mjs";

export const test = (req, res) => {
  console.log("test is working");
};

export const registerCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check if name was entered
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    //check if password is good
    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ error: "password is required and must be 8 character" });
    }
    //check if email is exist
    const exist = await user.findOne({ email });
    if (exist) {
      return res.status(400).json({ error: "Email already exist" });
    }

    //create a user
    const user = await user.create({
      name,
      email,
      password,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};
