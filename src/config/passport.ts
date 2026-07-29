import passport from "passport";
import { Strategy as SteamStrategy } from "passport-steam";
import { env } from "./env.js";

passport.use(
  new SteamStrategy(
    {
      returnURL: env.steam.returnURL,
      realm: env.steam.realm,
      apiKey: env.steam.apiKey,
    },
    (_, profile, done) => {
      done(null, {
        identifier: profile.id,
        profile,
      });
    },
  ),
);

export default passport;
