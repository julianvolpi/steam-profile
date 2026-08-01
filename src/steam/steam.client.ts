import { STEAM_API_BASE_URL } from "./steam.constants.js";
import type {
  SteamFriendsResponse,
  SteamOwnedGamesResponse,
  SteamPlayerSummaryResponse,
  SteamRecentlyPlayedGamesResponse,
} from "./steam.types.js";
import { getJson } from "./steam.http.js";
import { env } from "../config/env.js";

const buildUrl = (
  path: string,
  params: Record<string, string | undefined>,
): URL => {
  const url = new URL(path, STEAM_API_BASE_URL);
  url.search = new URLSearchParams({
    ...params,
    format: "json",
    key: env.steam.apiKey,
  }).toString();
  return url;
};

export const getOwnedGames = async (
  steamId: string,
): Promise<SteamOwnedGamesResponse> => {
  const url = buildUrl("/IPlayerService/GetOwnedGames/v0001/", {
    steamid: steamId,
    include_appinfo: "true",
    include_played_free_games: "true",
  });

  return getJson<SteamOwnedGamesResponse>(url, "GetOwnedGames");
};

export const getRecentlyPlayedGames = async (
  steamId: string,
  count?: number,
): Promise<SteamRecentlyPlayedGamesResponse> => {
  const url = buildUrl("/IPlayerService/GetRecentlyPlayedGames/v0001/", {
    steamid: steamId,
    count: count?.toString(),
  });

  return getJson<SteamRecentlyPlayedGamesResponse>(
    url,
    "GetRecentlyPlayedGames",
  );
};

export const getPlayerSummaries = async (
  steamIds: string[],
): Promise<SteamPlayerSummaryResponse> => {
  const url = buildUrl("/ISteamUser/GetPlayerSummaries/v0002/", {
    steamids: steamIds.join(","),
  });

  return getJson<SteamPlayerSummaryResponse>(url, "GetPlayerSummaries");
};

export const getPlayerFriends = async (
  steamId: string,
): Promise<SteamFriendsResponse> => {
  const url = buildUrl("/ISteamUser/GetFriendList/v0001/", {
    steamid: "76561197997211756",
    relationship: "friend",
  });

  return getJson<SteamFriendsResponse>(url, "GetFriendList");
};
