import { Router } from "express";
import cors from "cors";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3010",
  })
);

//auth router for signin, signup and logout endpoint
import authRout from "./authRout.mjs";
import userProfile from "./userProfile.mjs";
import logoutHandler from "./logOurEndpointRout.mjs";
router.use("/", authRout);
router.use("/", userProfile);
router.use("/", logoutHandler);

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
