import mongoose from "mongoose";
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  uplodedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "uploadedByModel",
  },
  uploadedByModel: {
    type: String,
    required: true,
    enum: ["Seller", "Broker"],
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  thumbnail: [
    {
      filename: {
        type: String,
      },
      path: {
        type: String,
      },
      mimetype: {
        type: String,
      },
    },
  ],
  video: [
    {
      filename: {
        type: String,
      },
      path: {
        type: String,
      },
      mimetype: {
        type: String,
      },
    },
  ],
  videoMin: {
    type: String,
  },
  category: {
    type: String,
  },
  reating: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
