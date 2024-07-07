import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: String,
    bankAccountDetail: [
      {
        bankAccountUserName: {
          type: String,
        },
        bankAccountType: {
          type: String,
        },
        bankAccountNumber: {
          type: String,
        },
      },
    ],

    contactAccounts: [
      {
        telegram: {
          type: String,
        },
        whatsapp: {
          type: String,
        },
        email: {
          type: String,
        },
      },
    ],
    userGuide: [
      {
        video: {
          type: String,
        },
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        audio: {
          type: String,
        },
        image: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
