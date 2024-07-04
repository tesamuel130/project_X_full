import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;
