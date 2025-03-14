import express from "express";
import { checkout, getOrderHistory } from "../controllers/orderController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authenticateUser); // Protect all routes in this file

router.post("/checkout", checkout);
router.get("/history", getOrderHistory);

export default router;