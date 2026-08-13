import { getPlayerSummaries } from "../steam/steamApi.client.js";
import { toUserProfile } from "./users.mapper.js";

export const fetchUsersProfile = async (steamIds: string[]) => {
  const usersResponse = await getPlayerSummaries(steamIds);
  return usersResponse.response.players.map((player) => toUserProfile(player));
};
