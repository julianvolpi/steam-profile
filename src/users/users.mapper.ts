import type { SteamProfile } from "../steam/steam.types.js";
import type { UserProfile } from "./users.types.js";

export const toUserProfile = (steamUser: SteamProfile): UserProfile => {
  return {
    steamId: steamUser.steamid,
    displayName: steamUser.personaname,
    profileUrl: steamUser.profileurl,
    profileState: steamUser.profilestate,
    communityVisibilityState: steamUser.communityvisibilitystate,
    avatar: steamUser.avatar,
    avatarMedium: steamUser.avatarmedium,
    avatarFull: steamUser.avatarfull,
    lastLogoff: new Date(steamUser.lastlogoff * 1000),
    status: steamUser.personastate,
    realName: steamUser.realname,
    clanId: steamUser.primaryclanid,
    accountCreatedAt: new Date(steamUser.timecreated * 1000),
    countryCode: steamUser.loccountrycode,
    stateCode: steamUser.locstatecode,
    cityId: steamUser.loccityid,
    currentGame: {
      appId: steamUser.gameid,
      name: steamUser.gameextrainfo,
    },
  };
};
