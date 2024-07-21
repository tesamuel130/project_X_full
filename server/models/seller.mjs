import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  nickName: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  resetToken: String,
  resetTokenExpiration: Date,
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
      sex: {
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
      optBankUserName: {
        type: String,
      },
      optBankAccountNumber: {
        type: String,
      },
      optPaymentMethod: {
        type: String,
      },
    },
  ],
  verificaion: [
    {
      verified: String,
      notVerified: String,
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
});

const Seller = mongoose.model("Seller", sellerSchema);

export default Seller;
