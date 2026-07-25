import jwt from "jsonwebtoken";
import type { StringValue } from "ms";

export const createToken = (userId: number, steamId: string): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
  }

  const expiresIn = (process.env.JWT_EXPIRES_IN ?? "1h") as StringValue;

  return jwt.sign(
    {
      sub: userId,
      steamId: steamId,
    },
    secret,
    {
      expiresIn: expiresIn,
    },
  );
};

export const verifyToken = (token: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
  }
  return jwt.verify(token, secret);
};
