import "express";
import type { PassportSteamUser, JwtPayload } from "../auth/auth.types.js";

declare global {
  namespace Express {
    interface User extends PassportSteamUser {}

    interface Request {
      auth: JwtPayload;
    }
  }
}

export {};
