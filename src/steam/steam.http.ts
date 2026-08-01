import { SteamApiError } from "../errors/steamApiError.js";
import type { SteamEndpoint } from "./steam.types.js";

export async function getJson<T>(
  url: URL,
  endpoint: SteamEndpoint,
): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new SteamApiError(endpoint, response.status);
  }

  const data = (await response.json()) as T;
  return data;
}
