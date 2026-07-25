import {
  createSteamUser,
  findById,
  findBySteamId,
} from "../repositories/user.repository.js";
import type { PassportSteamUser } from "./auth.types.js";

export const loginWithSteam = async (steamUser: PassportSteamUser) => {
  let user = await findBySteamId(steamUser.identifier);

  if (!user) {
    user = await createSteamUser(steamUser);
  }

  return user;
};

export const getCurrentUser = async (userId: number) => {
  return await findById(userId);
};
