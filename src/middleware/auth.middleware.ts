import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.sendStatus(401);
  }

  const payload = verifyToken(token);
  if (!payload || typeof payload === "string") {
    return res.sendStatus(401);
  }

  req.auth = payload;

  next();
};
