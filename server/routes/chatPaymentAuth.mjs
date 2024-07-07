import { Router } from "express";
import cors from "cors";
import { getOneSellerDetail } from "../controllers/sellerControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

//featch payment auth on the payment auth page
router.get("/chat/public/chatseller/paymentauth/:id", getOneSellerDetail);

export default router;
