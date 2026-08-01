import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getFriends } from "./friends.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getFriends);

export default router;
