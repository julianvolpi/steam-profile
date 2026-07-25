import { getOwnedGames } from "../steam/steam.client.js";

export const fetchGames = async (steamId: string) => {
  const games = await getOwnedGames(steamId);
  return games.response;
};
