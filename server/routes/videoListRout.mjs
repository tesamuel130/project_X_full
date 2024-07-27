import { Router } from "express";
import cors from "cors";
import { allVideoList } from "../controllers/videoControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3010",
  })
);

router.get("/home/all%video%list", allVideoList);

export default router;
