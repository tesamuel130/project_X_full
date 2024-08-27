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

// view the video
export const viewVideo = async (req, res) => {
  try {
    const videoId = req.params.id;

    // if (!mongoose.Types.ObjectId.isValid(videoId)) {
    //   return res.status(400).json({ message: "Invalid video ID" });
    // }

    const video = await Video.findById(videoId);
    if (!video) return res.status(404).json({ message: "Video not found" });

    res.json(video);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching video" });
  }
};

export const getUplodedVideoBySeller = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const sellerId = decoded.id;

    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching uploaded files", error });
  }
};

// count the video that seend by the user
export const countVideoView = async (req, res) => {
  const videoId = req.params.id;

  try {
    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    video.views += 1;
    await video.save();

    res.json({ message: "View counted", views: video.views });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// TODO: add a middleware that used to check the user validation and count the video view
// generate a middleware
export const checkSubscriptionValidity = async (req, res, next) => {
  const { userId } = req.body;

  try {
    const subscription = await Subscription.findOne({ user: userId });

    if (!subscription || !subscription.active || !subscription.adminApproved) {
      return res
        .status(403)
        .json({
          message: "No active subscription or subscription not approved",
        });
    }

    // Check if subscription has expired
    const currentTime = new Date();
    const elapsedMinutes = (currentTime - subscription.startTime) / (1000 * 60);

    if (elapsedMinutes > subscription.duration) {
      subscription.active = false;
      await subscription.save();
      return res.status(403).json({ message: "Subscription expired" });
    }

    req.subscription = subscription;
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Route to view a video
export const viewVideoClient = async (req, res) => {
  const { videoId } = req.params;
  const subscription = req.subscription;

  try {
    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Check if the video has already been viewed
    const alreadyViewed = subscription.videosViewed.some(
      (viewedVideo) => viewedVideo.videoId.toString() === videoId
    );

    // If not already viewed and the view limit has been reached
    if (!alreadyViewed && subscription.videosViewed.length >= 10) {
      return res.status(403).json({ message: "Video view limit reached" });
    }

    // If the video has not been viewed, add to viewed list
    if (!alreadyViewed) {
      subscription.videosViewed.push({ videoId });
      await subscription.save();
    }

    res.json({ message: "Video retrieved successfully", video });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
