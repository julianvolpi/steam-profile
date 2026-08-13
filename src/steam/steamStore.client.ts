import { STEAM_STORE_BASE_URL } from "./steam.constants.js";
import { getJson } from "./steam.http.js";
import type { SteamAppDetailsResponse } from "./steam.types.js";

const buildUrl = (path: string, params: Record<string, string>): URL => {
  const url = new URL(path, STEAM_STORE_BASE_URL);
  url.search = new URLSearchParams({
    ...params,
  }).toString();
  return url;
};

export const getAppDetails = async (
  appId: string,
): Promise<SteamAppDetailsResponse> => {
  const url = buildUrl("/api/appdetails", {
    appids: appId,
  });

  return getJson<SteamAppDetailsResponse>(url, "GetAppDetails");
};
