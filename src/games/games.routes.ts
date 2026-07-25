import express from "express";
import { getGames } from "./games.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getGames);

export default router;
