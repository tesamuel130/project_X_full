import mongoose from "mongoose";
const Schema = mongoose.Schema;

const packageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);

export default Package;
