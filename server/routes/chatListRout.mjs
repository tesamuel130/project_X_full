import { Router } from "express";
import cors from "cors";
import { publicChatServiceSeller } from "../controllers/sellerControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3010",
  })
);

router.get("/chat%list/public%chat%list", publicChatServiceSeller);

export default router;
