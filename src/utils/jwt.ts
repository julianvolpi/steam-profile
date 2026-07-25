import jwt from "jsonwebtoken";
import type { StringValue } from "ms";
import type { JwtPayload } from "../types/jwtPayload.js";

export const createToken = (userId: number, steamId: string): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
  }

  const expiresIn = (process.env.JWT_EXPIRES_IN ?? "1h") as StringValue;

  return jwt.sign(
    {
      sub: userId.toString(),
      steamId,
    },
    secret,
    {
      expiresIn,
    },
  );
};

export const verifyToken = (token: string): JwtPayload => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined.");
  }

  const payload = jwt.verify(token, secret);

  if (typeof payload === "string") {
    throw new Error("Invalid JWT payload.");
  }

  return payload as unknown as JwtPayload; // Kind of a hack, but it works without having to implement a type guard for the payload. The payload is expected to be of type JwtPayload, so we can safely cast it.

  // TODO: we need to be aware about the fact that the payload might not be of type JwtPayload (example: an old but valid token).
  // We should implement a type guard to check if the payload is of type JwtPayload.
};
