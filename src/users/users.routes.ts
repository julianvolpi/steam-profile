import express from "express";
import { getUsersProfile } from "./users.controller.js";

const router = express.Router();

router.get("/", getUsersProfile);

export default router;
