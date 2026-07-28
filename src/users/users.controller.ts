import type { Request, Response } from "express";
import { fetchUsersProfile } from "./users.service.js";

export const getUsersProfile = async (req: Request, res: Response) => {
  const ids = req.query.steamIds as string | undefined;
  if (!ids) {
    return res.status(400).json({ error: "Missing steamIds parameter" });
  }

  const steamIds = ids.split(",");
  const usersProfile = await fetchUsersProfile(steamIds);
  return res.json(usersProfile);
};
