import mongoose from "mongoose";

export const homeDataFeatch = new mongoose.Schema({
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
  gener: {
    type: String,
    required: true,
  },
});
