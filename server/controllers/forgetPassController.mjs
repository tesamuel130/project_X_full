import create from "prompt-sync";
import User from "../models/user.mjs";
import bycrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { hashPassword, comparePassword } from "../helpers/auth.mjs";
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

    const resetLink = `http://localhost:3010/reset-password/${token}`;
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
    Reset your password quickly and easily by clicking the link below.
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
                  Reset Password
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
                  the button below to reset your password.
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
                              href="${resetLink}"
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
                              >Reset Password</a
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
      subject: "Password Reset",
      html: emailTemplate,
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
