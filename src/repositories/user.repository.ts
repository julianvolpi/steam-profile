import type { SteamUser } from "../types/steamUser.js";
import { prisma } from "../db/prisma.js";

export const findBySteamId = async (steamId: string) => {
  return await prisma.user.findUnique({
    where: {
      steamId,
    },
  });
};

export const createSteamUser = async (steamUser: SteamUser) => {
  return await prisma.user.create({
    data: {
      steamId: steamUser.steamId,
      displayName: steamUser.profile.displayName,
      avatar: steamUser.profile._json.avatar || "",
      avatarMedium: steamUser.profile._json.avatarmedium || "",
      avatarFull: steamUser.profile._json.avatarfull || "",
    },
  });
};
