import express from "express";
import passport from "passport";
import { callback } from "../controllers/auth.controller.js";

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

export default router;
