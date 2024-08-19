import { Router } from "express";
import cors from "cors";
import {
  publicChatServiceSeller,
  contactInPersonServiceSeller,
} from "../controllers/sellerControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3010",
  })
);

// public chat service type
router.get("/public/chat/list", publicChatServiceSeller);

// contact in person service type
router.get("/contactInPerson/chat/list", contactInPersonServiceSeller);

export default router;
