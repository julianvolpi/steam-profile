import type { StringValue } from "ms";

const required = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
};

function number(name: string, defaultValue: number): number {
  const value = process.env[name];

  if (value === undefined) {
    return defaultValue;
  }

  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    throw new Error(`Environment variable ${name} must be a number.`);
  }

  return parsed;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",

  port: number("PORT", 3000),

  databaseUrl: required("DATABASE_URL"),

  jwt: {
    secret: required("JWT_SECRET"),
    expiresIn: (process.env.JWT_EXPIRES_IN ?? "1h") as StringValue,
  },

  steam: {
    apiKey: required("STEAM_API_KEY"),
    realm: required("STEAM_REALM"),
    returnURL: required("STEAM_RETURN_URL"),
  },
} as const;
