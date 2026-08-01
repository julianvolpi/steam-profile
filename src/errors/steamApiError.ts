import type { SteamEndpoint } from "../steam/steam.types.js";

export class SteamApiError extends Error {
  constructor(
    public readonly endpoint: SteamEndpoint,
    public readonly status: number,
  ) {
    super(`Steam API returned ${status}`);
  }
}
