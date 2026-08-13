import type { Request, Response } from "express";
import {
  fetchGameDetails,
  fetchUserGames,
  fetchUserRecentGames,
} from "./games.service.js";

export const getUserGames = async (req: Request, res: Response) => {
  const jwtPayload = req.auth;
  const games = await fetchUserGames(jwtPayload.steamId);
  return res.json(games);
};

export const getUserRecentGames = async (req: Request, res: Response) => {
  const jwtPayload = req.auth;
  const games = await fetchUserRecentGames(jwtPayload.steamId);
  return res.json(games);
};

export const getGameDetails = async (req: Request, res: Response) => {
  const id = req.query.gameId as string | undefined;
  if (!id) {
    return res.status(400).json({ error: "Missing gameId parameter" });
  }

  const gameDetails = await fetchGameDetails(id);
  return res.json(gameDetails);
};
