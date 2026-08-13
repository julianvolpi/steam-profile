import type { ErrorRequestHandler } from "express";
import { SteamApiError } from "../errors/steamApiError.js";
import type {
  SteamApiEndpoint,
  SteamStoreEndpoint,
} from "../steam/steam.types.js";
import { SteamStoreError } from "../errors/steamStoreError.js";

const STEAM_PRIVATE_CODES: Record<SteamApiEndpoint, string> = {
  GetFriendList: "STEAM_FRIENDS_PRIVATE",
  GetOwnedGames: "STEAM_GAMES_PRIVATE",
  GetPlayerSummaries: "STEAM_PROFILE_PRIVATE",
  GetRecentlyPlayedGames: "STEAM_RECENTLY_PLAYED_PRIVATE",
};

const STEAM_STORE_CODES: Record<SteamStoreEndpoint, string> = {
  GetAppDetails: "STEAM_APP_NOT_FOUND",
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof SteamApiError) {
    switch (err.status) {
      case 401:
        console.warn(err);
        return res.status(403).json({
          code:
            STEAM_PRIVATE_CODES[err.endpoint as SteamApiEndpoint] ??
            "STEAM_PRIVATE_RESOURCE",
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
  } else if (err instanceof SteamStoreError) {
    console.warn(err);
    return res.status(err.status || 404).json({
      code:
        STEAM_STORE_CODES[err.endpoint as SteamStoreEndpoint] ??
        "STEAM_NOT_FOUND",
      message: err.message || "The requested Steam resource was not found.",
    });
  }

  console.error(err);

  return res.status(500).json({
    message: "Internal server error",
  });
};
