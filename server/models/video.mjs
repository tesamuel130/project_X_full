import mongoose from "mongoose";
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
