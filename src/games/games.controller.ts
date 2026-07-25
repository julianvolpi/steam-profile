import type { Request, Response } from "express";
import { fetchGames } from "./games.service.js";

export const getGames = async (req: Request, res: Response) => {
  const jwtPayload = req.auth;
  const games = await fetchGames(jwtPayload.steamId);
  return res.json(games);
};
