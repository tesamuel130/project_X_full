import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: String,
    bankAccountUserName: {
      type: String,
    },
    bankAccountType: {
      type: String,
    },
    bankAccountNumber: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
