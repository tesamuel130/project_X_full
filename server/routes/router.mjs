import { Router } from "express";
import cors from "cors";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

import authRout from "./authRout.mjs";
import userProfile from "./userProfile.mjs";
router.use("/", authRout);
router.use("/", userProfile);

//home router pages
import homeRout from "./home.mjs";
router.use("/", homeRout);

//public chat list page
import chaterList from "./chatListRout.mjs";
router.use("/", chaterList);

//public chat auth page
import chatPaymentAuth from "./chatPaymentAuth.mjs";
router.use("/", chatPaymentAuth);

//video list page
import videoList from "./videoListRout.mjs";
router.use("/", videoList);

export default router;
