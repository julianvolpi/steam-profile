import "./config/dotenv.js";
import express from "express";
import { errorHandler } from "./middleware/error.middleware.js";
import passport from "./config/passport.js";
import authRoutes from "./auth/auth.routes.js";
import gamesRoutes from "./games/games.routes.js";
import usersRoutes from "./users/users.routes.js";
import friendsRoutes from "./friends/friends.routes.js";
import { authMiddleware } from "./middleware/auth.middleware.js";

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.get("/", (_req, res) => {
  res.send(
    "<html><body><h1>Steam Profile</h1><button onclick=\"window.location.href='/auth/steam'\">Login with Steam</button></body></html>",
  );
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRoutes);

app.use(authMiddleware);
app.use("/games", gamesRoutes);
app.use("/users", usersRoutes);
app.use("/friends", friendsRoutes);

app.use(errorHandler);

export default app;
