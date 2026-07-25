import express from "express";
import passport from "passport";
import { callback, me } from "./auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/steam", passport.authenticate("steam", { session: false }));
router.get(
  "/steam/callback",
  passport.authenticate("steam", {
    failureRedirect: "/login",
    session: false,
  }),
  callback,
);
router.get("/me", authMiddleware, me);

export default router;
