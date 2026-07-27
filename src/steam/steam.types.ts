export interface SteamOwnedGame {
  appid: number;
  name: string;
  playtime_forever: number;

  playtime_2weeks?: number;
  playtime_windows_forever?: number;
  playtime_mac_forever?: number;
  playtime_linux_forever?: number;
  playtime_deck_forever?: number;

  rtime_last_played?: number;
  playtime_disconnected?: number;

  has_community_visible_stats?: boolean;
  has_leaderboards?: boolean;

  content_descriptorids?: number[];
}

export interface SteamOwnedGamesResponse {
  response: {
    game_count: number;
    games: SteamOwnedGame[];
  };
}

export interface SteamProfile {
  provider: "steam";
  _json: {
    steamid: string;
    communityvisibilitystate: number;
    profilestate: number;
    personaname: string;
    commentpermission: number;
    profileurl: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    avatarhash: string;
    lastlogoff: number;
    personastate: number;
    realname: string;
    primaryclanid: string;
    timecreated: number;
    personastateflags: number;
    loccountrycode: string;
    locstatecode: string;
  };
  id: string;
  displayName: string;
  photos: Array<{ value: string }>;
}
