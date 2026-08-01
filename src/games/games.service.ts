import {
  getOwnedGames,
  getRecentlyPlayedGames,
} from "../steam/steam.client.js";
import { toGame } from "./games.mapper.js";

export const fetchGames = async (steamId: string) => {
  const ownedGames = await getOwnedGames(steamId);
  const games = ownedGames.response.games.map((steamGame) => toGame(steamGame));
  return games;
};

export const fetchRecentGames = async (steamId: string) => {
  const recentlyPlayedGames = await getRecentlyPlayedGames(steamId);
  const games = recentlyPlayedGames.response.games.map((steamGame) =>
    toGame(steamGame),
  );
  return games;
};
