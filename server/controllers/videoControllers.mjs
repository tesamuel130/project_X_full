import Video from "../models/video.mjs";

export default allVideoList = async (req, res) => {
  try {
    const allVideo = await Video.find();
    res.json(allVideo);
  } catch (err) {
    res.status(500).send(err);
  }
};
