import type { Request, Response } from "express";
import { fetchFriends } from "./friends.service.js";

export const getFriends = async (req: Request, res: Response) => {
  const jwtPayload = req.auth;
  const friends = await fetchFriends(jwtPayload.steamId);
  return res.json(friends);
};
