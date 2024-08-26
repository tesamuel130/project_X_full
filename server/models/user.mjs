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
    callId: {
      type: String,
      unique: true,
    },
    socketId: {
      type: String,
    },
    subscription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
