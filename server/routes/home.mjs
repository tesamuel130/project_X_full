import { Router } from "express";
import cors from "cors";
import {
  publicChatServiceSeller,
  contctInPersonServiceSeller,
} from "../controllers/sellerControllers.mjs";
import { allVideoList } from "../controllers/videoControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/home/public%chat%list", publicChatServiceSeller);
router.post("/home/all%video%list", allVideoList);
router.post("/home/contact%in%person", contctInPersonServiceSeller);

export default router;
