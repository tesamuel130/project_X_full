import { Router } from "express";
import cors from "cors";
import {
  test,
  registerCustomer,
  loginUser,
  verifyEmail,
} from "../controllers/authControllers.mjs";
import { authenticateTokens } from "../middleware/authenticateToken.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3010",
  })
);

// /askdfj
router.get("/", test);
router.post("/register", registerCustomer);
router.get("/verifyEmail/:token", verifyEmail);
router.post("/login", loginUser);

//autenticate token used to rediect the invalid token to login
router.get("/verifyToken", authenticateTokens, (req, res) => {
  res.json({ valid: true });
});

//forget password
import {
  forgetPassword,
  resetPassword,
} from "../controllers/forgetPassController.mjs";
router.post("/user/forgetpassword", forgetPassword);
router.post("/user/reset-password/:token", resetPassword);

export default router;
