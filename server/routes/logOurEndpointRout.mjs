import { Router } from "express";
import cors from "cors";
import { logOutHandler } from "../controller/logOutController.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

//working on logout handler func
router.post("/logout", logOutHandler);

export default router;
