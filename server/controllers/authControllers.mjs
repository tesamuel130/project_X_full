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

    // Generate a verification token
    const token = jwt.sign({ email }, JWT_SECRET, {
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
    // email html template
    const emailTemplate = `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Email Confirmation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      @media screen {
        @font-face {
          font-family: "Source Sans Pro";
          font-style: normal;
          font-weight: 400;
          src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),
            url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff)
              format("woff");
        }
        @font-face {
          font-family: "Source Sans Pro";
          font-style: normal;
          font-weight: 700;
          src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),
            url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff)
              format("woff");
        }
      }
      body,
      table,
      td,
      a {
        -ms-text-size-adjust: 100%; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
      }
      table,
      td {
        mso-table-rspace: 0pt;
        mso-table-lspace: 0pt;
      }
      img {
        -ms-interpolation-mode: bicubic;
      }
      a[x-apple-data-detectors] {
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        color: inherit !important;
        text-decoration: none !important;
      }
      div[style*="margin: 16px 0;"] {
        margin: 0 !important;
      }
      body {
        width: 100% !important;
        height: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      table {
        border-collapse: collapse !important;
      }
      a {
        color: #ea2c5a;
      }
      img {
        height: auto;
        line-height: 100%;
        text-decoration: none;
        border: 0;
        outline: none;
      }
    </style>
  </head>
  <body style="background-color: #e9ecef">
    <div
      class="preheader"
      style="
        display: none;
        max-width: 0;
        max-height: 0;
        overflow: hidden;
        font-size: 1px;
        line-height: 1px;
        color: #fff;
        opacity: 0;
      "
    >
    Welcome to LingChat! Confirm your email to get started Client Account.
    </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" bgcolor="#e9ecef">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td
                align="left"
                bgcolor="#ffffff"
                style="
                  padding: 36px 24px 0;
                  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                  border-top: 3px solid #d4dadf;
                "
              >
                <h1
                  style="
                    margin: 0;
                    font-size: 32px;
                    font-weight: 700;
                    letter-spacing: -1px;
                    line-height: 48px;
                  "
                >
                  Verify Your Account
                </h1>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#e9ecef">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td
                align="left"
                bgcolor="#ffffff"
                style="
                  padding: 24px;
                  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                "
              >
                <p style="margin: 0">
                  Hi welcome to <a href="www.lingChat.com">LingChat</a> Tap 
                  the button below to confirm your email. If you
                  didn't create an account with this emial don't click the button
                  it delates automaticaly with some times a go!!
                </p>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center" bgcolor="#ffffff" style="padding: 12px">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td
                            align="center"
                            bgcolor="#ea2c5a"
                            style="border-radius: 6px"
                          >
                            <a
                              href="${verifyLink}"
                              target="_blank"
                              style="
                                display: inline-block;
                                padding: 16px 36px;
                                font-family: 'Source Sans Pro', Helvetica, Arial,
                                  sans-serif;
                                font-size: 16px;
                                color: #ffffff;
                                text-decoration: none;
                                border-radius: 6px;
                              "
                              >Verify</a
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                align="left"
                bgcolor="#ffffff"
                style="
                  padding: 24px;
                  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                  border-bottom: 3px solid #d4dadf;
                "
              ></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#e9ecef" style="padding: 24px">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td
                align="center"
                bgcolor="#e9ecef"
                style="
                  padding: 12px 24px;
                  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                  font-size: 14px;
                  line-height: 20px;
                  color: #666;
                "
              >
                <p style="margin: 0">
                  You received this email because we received a request for
                  register for your account. for more detail 
                  <a href="www.lingChat.com">goto</a> ower site!!
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

    `;

    const mailOptions = {
      from: emailAdd,
      to: email,
      subject: "Email Verification",
      html: emailTemplate,
    };

    // send verificaiton email
    const emailSent = await transporter.sendMail(mailOptions);

    // only save the user if the email is verified
    if (emailSent.accepted.length > 0) {
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        callId,
        verificationExpiration,
      });

      return res.status(201).json({
        message: "User registered. Check your email for verification link.",
        user,
      });
    } else {
      return res.status(500).json({
        error:
          "Failed to send verification email. Please try again. and check the email is valid",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//user verify email endpoint
export const verifyEmail = async (req, res) => {
  const { token } = req.params;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

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
