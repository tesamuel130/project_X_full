import { Router } from "express";
import { getProfile } from "../controllers/userProfileControllers.mjs";

const router = Router();

router.get("/profile", getProfile);

export default router;
