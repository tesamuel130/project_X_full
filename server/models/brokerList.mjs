import mongoose from "mongoose";
const Schema = mongoose.Schema;

const brokerSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    PhoneNumber: {
      type: Number,
    },
    password: {
      type: String,
    },
    avater: {
      type: String,
    },
  },
  { timestamps: true }
);

const Broker = mongoose.model("Broker", brokerSchema);

export default Broker;
