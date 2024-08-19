import mongoose, { isObjectIdOrHexString, isValidObjectId } from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    isValidEmail: {
      type: Boolean,
      default: false,
    },
    verificationExpiration: {
      type: Date,
      required: true,
    },
    resetToken: String,
    resetTokenExpiration: Date,
    transaction: [
      {
        accountUserName: {
          type: String,
        },
        accountNumber: {
          type: String,
        },
        currency: {
          type: String,
        },
        amount: {
          type: Number,
        },
        paymentMethod: {
          type: String,
        },
      },
    ],
    recietImage: [
      {
        filename: {
          type: String,
        },
        path: {
          type: String,
        },
        mimetype: {
          type: String,
        },
      },
    ],
    callId: {
      type: String,
      unique: true,
    },
    socketId: {
      type: String,
    },
    subscription: {
      type: Object,
    }, // PWA push subscription
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
