import type { ErrorRequestHandler } from "express";
import { SteamApiError } from "../errors/steamApiError.js";
import type { SteamEndpoint } from "../steam/steam.types.js";

const STEAM_PRIVATE_CODES: Record<SteamEndpoint, string> = {
  GetFriendList: "STEAM_FRIENDS_PRIVATE",
  GetOwnedGames: "STEAM_GAMES_PRIVATE",
  GetPlayerSummaries: "STEAM_PROFILE_PRIVATE",
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof SteamApiError) {
    switch (err.status) {
      case 401:
        console.warn(err);
        return res.status(403).json({
          code: STEAM_PRIVATE_CODES[err.endpoint] ?? "STEAM_PRIVATE_RESOURCE",
          message: "The requested Steam resource is private.",
        });

      case 429:
        console.error(err);
        return res.status(503).json({
          code: "STEAM_RATE_LIMIT",
          message: "Steam API rate limit exceeded.",
        });

      default:
        console.error(err);
        return res.status(502).json({
          code: "STEAM_API_ERROR",
          message: "Steam API request failed.",
        });
    }
  }

  console.error(err);

  return res.status(500).json({
    message: "Internal server error",
  });
};
