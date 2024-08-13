import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sellerSchema = new Schema(
  {
    nickName: {
      type: String,
      unique: true,
    },
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
    verificationStatus: {
      type: String,
      default: "not verified",
    },
    descriptionForNotVerified: {
      type: String,
      default: "",
    },
    sellerDetail: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
        country: {
          type: String,
        },
        age: {
          type: Number,
          required: true,
        },
        gender: {
          type: String,
          required: true,
        },
        bodyColor: {
          type: String,
        },
        bodyType: {
          type: String,
        },
      },
    ],
    idImage: [
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
    price: {
      type: Number,
    },
    serviceType: {
      type: String,
    },
    bankAccountDetail: [
      {
        bankUserName: {
          type: String,
        },
        bankAccountNumber: {
          type: String,
        },
        paymentMethod: {
          type: String,
        },
      },
    ],
    optionalBankAccountDetail: [
      {
        optionalBankUserName: {
          type: String,
        },
        optionalBankAccountNumber: {
          type: String,
        },
        optionalPaymentMethod: {
          type: String,
        },
      },
    ],
    referredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
    },
    submitVerificationDate: {
      type: Date,
      default: Date.now,
    },
    sellerImage: [
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
    moneyMake: [
      {
        amount: {
          type: Number,
        },
        currency: {
          type: String,
        },
      },
    ],
    addressDetail: [
      {
        address: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
        telgram: {
          type: String,
        },
        email: {
          type: String,
        },
        whatsup: {
          type: String,
        },
      },
    ],
    report: {
      type: String,
    },
    reating: {
      type: String,
    },
    socketId: {
      type: String,
    },
    NoOfContact: {
      type: Number,
    },
    referalDetail: [
      {
        referalCode: {
          type: String,
        },
        sellerId: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Seller = mongoose.model("Seller", sellerSchema);

export default Seller;
