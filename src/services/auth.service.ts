import { create, findBySteamId } from "../repositories/user.repository.js";
import type { SteamUser } from "../types/steamUser.js";

export const loginWithSteam = async (steamUser: SteamUser) => {
  let user = await findBySteamId(steamUser.steamId);

  if (!user) {
    console.log("Creating user");
    user = await create(steamUser);
  }

  return user;
};
