import { getPlayerFriends, getPlayerSummaries } from "../steam/steam.client.js";
import { toUserProfile } from "../users/users.mapper.js";

export const fetchFriends = async (steamId: string) => {
  const friends = (await getPlayerFriends(steamId)).friendslist.friends;

  const friendsWithProfilesResponse = await getPlayerSummaries(
    friends.map((friend) => friend.steamid),
  );

  return friendsWithProfilesResponse.response.players.map((player) =>
    toUserProfile(player),
  );
};
