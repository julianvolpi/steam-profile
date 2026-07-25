import type { Request, Response } from "express";
import { getCurrentUser, loginWithSteam } from "../services/auth.service.js";
import { createToken } from "../utils/jwt.js";

export const callback = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  const steamUser = req.user;
  const user = await loginWithSteam(steamUser);
  const token = createToken(user.id, user.steamId);
  return res.json({ token });
};

export const me = async (req: Request, res: Response) => {
  const jwtPayload = req.auth;
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
