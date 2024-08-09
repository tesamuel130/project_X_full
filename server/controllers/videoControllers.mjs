import Video from "../models/video.mjs";

//filter video for the home page
export const allVideoList = async (req, res) => {
  try {
    const allVideo = await Video.find();
    res.json(allVideo);
  } catch (err) {
    res.status(500).send(err);
  }
};

/*
  create an endpoint for the client home to get the uploaded videos
*/
export const getUplodedVideoForClientHome = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const videos = await Video.find({
      uploadedByModel: { $in: ["Seller", "Broker"] },
    })
      .skip(skip)
      .limit(limit);
    const totalVideos = await Video.countDocuments({
      uploadedByModel: { $in: ["Seller", "Broker"] },
    });
    res.status(200).json({
      videos,
      totalPages: Math.ceil(totalVideos / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching uploaded files", error });
  }
};
