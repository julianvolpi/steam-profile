import "./config/dotenv.js";
import express from "express";
import passport from "./config/passport.js";
import authRoutes from "./routes/auth.routes.js";
import { prisma } from "./db/prisma.js";

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(express.json());
app.use(passport.initialize());

app.use("/auth", authRoutes);

app.get("/", (_req, res) => {
  res.send("Hello from Express server");
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
