import mongoose from "mongoose";
const Schema = mongoose.Schema;

const brokerSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  PhoneNumber: Number,
  password: String,
});

const Broker = mongoose.model("Broker", brokerSchema);

export default Broker;
