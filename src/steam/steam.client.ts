import { STEAM_API_BASE_URL } from "./steam.constants.js";
import type { SteamOwnedGamesResponse } from "./steam.types.js";
import { getJson } from "./steam.http.js";

export const getOwnedGames = async (
  steamId: string,
): Promise<SteamOwnedGamesResponse> => {
  const url = new URL(
    "/IPlayerService/GetOwnedGames/v0001/",
    STEAM_API_BASE_URL,
  );

  url.search = new URLSearchParams({
    key: process.env.STEAM_API_KEY!,
    steamid: steamId,
    include_appinfo: "true",
    include_played_free_games: "true",
    format: "json",
  }).toString();

  return getJson<SteamOwnedGamesResponse>(url);
};
