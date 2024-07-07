import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const sellerList = new Schema({
  nickName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  personDetail: [
    {
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
  serviceType: {
    type: String,
  },
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
});

const sellerListItem = mongoose.model("Item", sellerList);

export default sellerListItem;
