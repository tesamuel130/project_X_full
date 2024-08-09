import { Router } from "express";
import cors from "cors";
import {
  allVideoList,
  getUplodedVideoForClientHome,
} from "../controllers/videoControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3010",
  })
);

router.get("/home/all%video%list", allVideoList);
/*
  create an endpoint for the client home to get the uploaded videos
*/
router.get("/video/list/down", getUplodedVideoForClientHome);

export default router;
