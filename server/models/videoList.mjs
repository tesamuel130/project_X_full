import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const videoList = mongoose.model("User", videoSchema);

export default videoList;
