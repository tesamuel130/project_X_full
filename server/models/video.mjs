import mongoose from "mongoose";
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  videoMin: {
    type: String,
  },
  category: {
    type: String,
  },
  reating: {
    type: Number,
  },
  views: {
    type: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
