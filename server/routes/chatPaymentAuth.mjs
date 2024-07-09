import { Router } from "express";
import cors from "cors";
import authenticateToken from "../middleware/authenticateToken.mjs";
import { getOneSellerDetail } from "../controllers/sellerControllers.mjs";
import upload from "../middleware/upload.mjs";
import { paymentStatusSender } from "../controllers/paymentControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

//featch payment auth on the payment auth page
router.get(
  "/chat/public/chatseller/paymentauth/:id",
  authenticateToken,
  getOneSellerDetail
);

router.post(
  "/chat/public/chatseller/paymentauth/:id/uploadpayment",
  authenticateToken,
  upload.array("files", 3),
  paymentStatusSender
);

export default router;
