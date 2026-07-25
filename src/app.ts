import "./config/dotenv.js";
import express from "express";
import passport from "./config/passport.js";
import authRoutes from "./auth/auth.routes.js";
import gamesRoutes from "./games/games.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use("/auth", authRoutes);
app.use("/games", gamesRoutes);

app.get("/", (_req, res) => {
  res.send("Hello from Express server");
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use(errorHandler);

export default app;
