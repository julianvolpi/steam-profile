import type { Request, Response } from "express";
import { getCurrentUser, loginWithSteam } from "../services/auth.service.js";
import { createToken } from "../utils/jwt.js";
import type { PassportSteamUser } from "../types/passportSteamUser.js";
import type { JwtPayload } from "../types/jwtPayload.js";

export const callback = async (req: Request, res: Response) => {
  const steamUser = req.user as PassportSteamUser;
  const user = await loginWithSteam(steamUser);
  const token = createToken(user.id, user.steamId);
  return res.json({ token });
};

export const me = async (req: Request, res: Response) => {
  const jwtPayload = req.auth as JwtPayload;
  const user = await getCurrentUser(jwtPayload.sub);

  if (!user) {
    return res.sendStatus(404);
  }

  return res.json({
    steamId: user.steamId,
    displayName: user.displayName,
    avatar: user.avatar,
    avatarMedium: user.avatarMedium,
    avatarFull: user.avatarFull,
  });
};
