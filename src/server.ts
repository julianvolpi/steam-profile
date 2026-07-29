import app from "./app.js";
import { env } from "./config/env.js";
import { prisma } from "./db/prisma.js";

const shutdown = async () => {
  await prisma.$disconnect();
  process.exit(0);
};

const port = env.port;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
