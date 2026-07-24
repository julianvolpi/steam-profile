export interface SteamUser {
  steamId: string;
  profile: {
    _json: {
      steamid: string;
      personaname: string;
      profileurl: string;
      avatar: string;
      avatarmedium: string;
      avatarfull: string;
      realname: string;
      primaryclanid: string;
      timecreated: number;
      loccountrycode: string;
      locstatecode: string;
      loccityid: number;
    };
    displayName: string;
  };
}
