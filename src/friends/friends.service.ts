import { getPlayerFriends, getPlayerSummaries } from "../steam/steam.client.js";
import { toUserProfile } from "../users/users.mapper.js";

export const fetchFriends = async (steamId: string) => {
  const friends = (await getPlayerFriends(steamId)).friendslist.friends;
  const friendsSince = new Map<string, Date>();

  const friendsWithProfilesResponse = await getPlayerSummaries(
    friends.map((friend) => {
      friendsSince.set(friend.steamid, new Date(friend.friend_since * 1000));
      return friend.steamid;
    }),
  );

  return friendsWithProfilesResponse.response.players.map((player) => ({
    ...toUserProfile(player),
    friendSince: friendsSince.get(player.steamid),
  }));
};
