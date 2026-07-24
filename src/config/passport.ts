import passport from "passport";
import { Strategy as SteamStrategy } from "passport-steam";

passport.use(
  new SteamStrategy(
    {
      returnURL: process.env.STEAM_RETURN_URL!,
      realm: process.env.STEAM_REALM!,
      apiKey: process.env.STEAM_API_KEY!,
    },
    (_, profile, done) => {
      done(null, {
        steamId: profile.id,
        profile,
      });
    },
  ),
);

export default passport;
