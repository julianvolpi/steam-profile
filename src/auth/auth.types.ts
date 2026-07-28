import type { SteamUser } from "../steam/steam.types.js";

export interface PassportSteamUser {
  identifier: string;
  profile: SteamUser;
}

export interface JwtPayload {
  sub: string;
  steamId: string;
}
