import type { SteamProfile } from "../steam/steam.types.js";

export interface PassportSteamUser {
  identifier: string;
  profile: SteamProfile;
}

export interface JwtPayload {
  sub: string;
  steamId: string;
}
