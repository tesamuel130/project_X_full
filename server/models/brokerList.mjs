import mongoose from "mongoose";
const Schema = mongoose.Schema;

const brokerSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const BrokerList = mongoose.model("User", brokerSchema);

export default BrokerList;
