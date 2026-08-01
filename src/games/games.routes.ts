import express from "express";
import { getGames, getRecentGames } from "./games.controller.js";

const router = express.Router();

router.get("/", getGames);
router.get("/recent", getRecentGames);

export default router;
