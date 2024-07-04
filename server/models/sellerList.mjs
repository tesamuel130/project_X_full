import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const sellerList = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

const sellerListItem = mongoose.model("Item", sellerList);

export default sellerListItem;
