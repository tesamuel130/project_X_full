import { Router } from "express";
import cors from "cors";
import { test } from "../controllers/authControllers.mjs";

const router = Router();

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);

export default router;
