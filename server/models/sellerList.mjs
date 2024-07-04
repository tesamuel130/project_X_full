import mongoose from "mongoose";

export const sellerList = new mongoose.Schema({
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
