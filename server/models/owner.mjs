import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;
