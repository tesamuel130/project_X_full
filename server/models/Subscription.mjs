import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    videosViewed: [
      {
        videoId: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
        viewedAt: { type: Date, default: Date.now },
      },
    ],
    startTime: { type: Date },
    active: { type: Boolean, default: false },
    adminApproved: { type: Boolean, default: false },
    expirationTime: { type: Date },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
