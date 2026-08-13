import express from "express";
import {
  getGameDetails,
  getUserGames,
  getUserRecentGames,
} from "./games.controller.js";

const router = express.Router();

router.get("/", getUserGames);
router.get("/recent", getUserRecentGames);
router.get("/details", getGameDetails);

export default router;
