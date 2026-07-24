import "./config/dotenv.js";
import express from "express";
import passport from "./config/passport.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use("/auth", authRoutes);

app.get("/", (_req, res) => {
  res.send("Hello from Express server");
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

export default app;
