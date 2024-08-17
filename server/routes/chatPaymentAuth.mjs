import { Router } from "express";
import cors from "cors";
import {
  authenticateToken,
  verifyToken,
} from "../middleware/authenticateToken.mjs";
import {
  getOneSellerDetail,
  getUserIdVideoCall,
} from "../controllers/sellerControllers.mjs";
import upload from "../middleware/upload.mjs";
import {
  paymentStatusSender,
  paymentOptions,
} from "../controllers/paymentControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3010",
  })
);

//featch payment auth on the payment auth page
router.get("/chat/public/chatseller/paymentauth/:id", getOneSellerDetail);

//featch userid for video call
router.get("/get/userid/for/videocall", getUserIdVideoCall);

//get the payment options
router.get(
  "/chat/public/chatseller/paymentauth/payment-options",
  paymentOptions
);

//get the currency options
router.get(
  "/chat/public/chatseller/paymentauth/currency-options",
  paymentOptions
);

router.post(
  "/chat/public/chatseller/paymentauth/:id/uploadpayment",
  authenticateToken,
  upload.array("files", 3),
  paymentStatusSender
);

export default router;
