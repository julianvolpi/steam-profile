import {
  getOwnedGames,
  getRecentlyPlayedGames,
} from "../steam/steamApi.client.js";
import { getAppDetails } from "../steam/steamStore.client.js";
import { toGame, toStoreGame } from "./games.mapper.js";

export const fetchUserGames = async (steamId: string) => {
  const ownedGames = await getOwnedGames(steamId);
  const games = ownedGames.response.games.map((steamGame) => toGame(steamGame));
  return games;
};

export const fetchUserRecentGames = async (steamId: string) => {
  const recentlyPlayedGames = await getRecentlyPlayedGames(steamId);
  const games = recentlyPlayedGames.response.games.map((steamGame) =>
    toGame(steamGame),
  );
  return games;
};

export const fetchGameDetails = async (gameId: string) => {
  const appDetails = await getAppDetails(gameId);

  const gameDetails = Object.values(appDetails)[0];

  if (!gameDetails?.success) {
    throw new Error(`Failed to fetch details for gameId: ${gameDetails}`);
  }

  const game = toStoreGame(gameDetails.data);
  return game;
};
