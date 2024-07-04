import mongoose from "mongoose";

const brokerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const BrokerList = mongoose.model("User", brokerSchema);

export default BrokerList;
