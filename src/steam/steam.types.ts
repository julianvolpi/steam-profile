export type SteamApiEndpoint =
  | "GetFriendList"
  | "GetOwnedGames"
  | "GetPlayerSummaries"
  | "GetRecentlyPlayedGames";

export type SteamStoreEndpoint = "GetAppDetails";

export type SteamEndpoint = SteamApiEndpoint | SteamStoreEndpoint;

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

export interface SteamGenre {
  id: string;
  description: string;
}

export interface SteamCategory {
  id: number;
  description: string;
}

export interface SteamReleaseDate {
  coming_soon: boolean;
  date: string;
}

export interface SteamScreenshot {
  id: number;
  path_thumbnail: string;
  path_full: string;
}

export interface SteamAppDetails {
  steam_appid: number;
  name: string;
  short_description: string;
  header_image: string;
  developers: string[];
  publishers: string[];
  genres: SteamGenre[];
  categories: SteamCategory[];
  release_date: SteamReleaseDate;
  website?: string;
  background?: string;
  screenshots?: SteamScreenshot[];
}

export interface SteamProfile {
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
  primaryclanid?: string;
  timecreated: number;
  personastateflags: number;
  loccountrycode: string;
  locstatecode: string;
  loccityid?: number;
  gameid?: string;
  gameextrainfo?: string;
}

export interface SteamUser {
  provider: "steam";
  _json: SteamProfile;
  id: string;
  displayName: string;
  photos: Array<{ value: string }>;
}

export interface SteamFriend {
  steamid: string;
  relationship: "friend";
  friend_since: number;
}

export interface SteamFriendsResponse {
  friendslist: {
    friends: SteamFriend[];
  };
}

export interface SteamOwnedGamesResponse {
  response: {
    game_count: number;
    games: SteamOwnedGame[];
  };
}

interface SteamAppDetailsSuccess {
  success: true;
  data: SteamAppDetails;
}

interface SteamAppDetailsFailure {
  success: false;
}

type SteamAppDetailsResult = SteamAppDetailsSuccess | SteamAppDetailsFailure;

export interface SteamAppDetailsResponse {
  [appId: string]: SteamAppDetailsResult;
}

export interface SteamRecentlyPlayedGamesResponse {
  response: {
    total_count: number;
    games: SteamOwnedGame[];
  };
}

export interface SteamPlayerSummaryResponse {
  response: {
    players: SteamProfile[];
  };
}
