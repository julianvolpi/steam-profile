import type { Request, Response } from "express";
import { loginWithSteam } from "../services/auth.service.js";
import type { SteamUser } from "../types/steamUser.js";

export const callback = async (req: Request, res: Response) => {
  const steamUser = req.user as SteamUser;
  const user = await loginWithSteam(steamUser);
  res.json(user);
};
