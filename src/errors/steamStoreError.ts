import type { SteamStoreEndpoint } from "../steam/steam.types.js";

export class SteamStoreError extends Error {
  constructor(
    message: string,
    public readonly endpoint: SteamStoreEndpoint,
    public readonly status?: number,
  ) {
    super(message);
  }
}
