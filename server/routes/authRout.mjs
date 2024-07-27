import { Router } from "express";
import cors from "cors";
import {
  test,
  registerCustomer,
  loginUser,
} from "../controllers/authControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3010",
  })
);

router.get("/", test);
router.post("/register", registerCustomer);
router.post("/login", loginUser);

//forget password
import {
  forgetPassword,
  resetPassword,
} from "../controllers/forgetPassController.mjs";
router.post("/user/forgetpassword", forgetPassword);
router.post("/user/reset-password/:token", resetPassword);

export default router;
