import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getUsersProfile } from "./users.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getUsersProfile);

export default router;
