import type { Request, Response } from "express";
import { getCurrentUser, loginWithSteam } from "./auth.service.js";
import { createToken } from "../utils/jwt.js";
import { fetchUserGames } from "../games/games.service.js";

export const callback = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  const steamUser = req.user;
  const user = await loginWithSteam(steamUser);
  const token = createToken(user.id, user.steamId);
  return res.json({ token });
};

export const callbackTest = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  const steamUser = req.user;
  const user = await loginWithSteam(steamUser);
  const games = await fetchUserGames(user.steamId);
  return res.send(
    `<html>
      <body>
        <h1>Steam Profile</h1>
        <p>Welcome, ${user.displayName}!</p>
        <p>Your Steam ID is ${user.steamId}</p>
        <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          ${games
            .map(
              (game) => `
                <li style="width: 300px; display: flex; flex-direction: column; align-items: center; list-style: none; border: 1px solid #ccc; text-align: center;">
                  <img src="${game.imageUrl}" alt="${game.name}" style="height: auto;" />
                  <p style="margin: 10px 0;">${Math.round(game.playtimeForever / 60)} hours</p>
                </li>
              `,
            )
            .join("")}
        </ul>
      </body>
    </html>`,
  );
};

export const me = async (req: Request, res: Response) => {
  const userId = Number(req.auth.sub);
  const user = await getCurrentUser(userId);

  if (!user) {
    return res.sendStatus(404);
  }

  return res.json({
    steamId: user.steamId,
    displayName: user.displayName,
    avatar: user.avatar,
    avatarMedium: user.avatarMedium,
    avatarFull: user.avatarFull,
  });
};
