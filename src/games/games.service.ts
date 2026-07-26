import { getOwnedGames } from "../steam/steam.client.js";
import { toGame } from "./games.mapper.js";

export const fetchGames = async (steamId: string) => {
  const ownedGames = await getOwnedGames(steamId);
  const games = ownedGames.response.games.map((steamGame) => toGame(steamGame));
  return games;
};
