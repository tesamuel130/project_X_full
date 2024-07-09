import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
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
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
