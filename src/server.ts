import app from "./app.js";
import { prisma } from "./db/prisma.js";

const shutdown = async () => {
  await prisma.$disconnect();
  process.exit(0);
};

const port = Number(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
