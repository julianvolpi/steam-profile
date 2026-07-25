import { prisma } from "../db/prisma.js";
import type { UserModel } from "../generated/prisma/models.js";
import type { PassportSteamUser } from "../types/passportSteamUser.js";

export const findById = async (id: number) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const findBySteamId = async (identifier: string) => {
  return await prisma.user.findUnique({
    where: {
      steamId: identifier,
    },
  });
};

export const createSteamUser = async (
  steamUser: PassportSteamUser,
): Promise<UserModel> => {
  return await prisma.user.create({
    data: {
      steamId: steamUser.identifier,
      displayName: steamUser.profile.displayName,
      avatar: steamUser.profile._json.avatar || "",
      avatarMedium: steamUser.profile._json.avatarmedium || "",
      avatarFull: steamUser.profile._json.avatarfull || "",
    },
  });
};
