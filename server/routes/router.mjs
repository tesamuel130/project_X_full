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

export default router;
