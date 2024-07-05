import { Router } from "express";

const router = Router();

import {
  showAllBrokers,
  showBrokerById,
  addBroker,
  updateBrokerById,
  deleteBrokerById,
} from "../controllers/brokerAuthController.mjs";

router.get("/all", showAllBrokers);
router.post("/byid", showBrokerById);
router.post("/add", addBroker);
router.post("/update", updateBrokerById);
router.post("/delete", deleteBrokerById);

export default router;
