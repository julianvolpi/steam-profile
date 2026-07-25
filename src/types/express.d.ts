import "express";
import type { JwtPayload } from "./jwtPayload.js";
import type { PassportSteamUser } from "./passportSteamUser.js";

declare global {
  namespace Express {
    interface User extends PassportSteamUser {}

    interface Request {
      auth: JwtPayload;
    }
  }
}

export {};
