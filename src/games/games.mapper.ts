import type { SteamOwnedGame } from "../steam/steam.types.js";
import type { Game } from "./games.types.js";

export const toGame = (steamGame: SteamOwnedGame): Game => ({
  id: steamGame.appid,
  name: steamGame.name,
  playtimeForever: steamGame.playtime_forever,
  iconUrl: steamGame.img_icon_url,
  playtime2weeks: steamGame.playtime_2weeks,
  rtimeLastPlayed: steamGame.rtime_last_played,
  hasCommunityVisibleStats: steamGame.has_community_visible_stats,
  hasLeaderboards: steamGame.has_leaderboards,
  contentDescriptorIds: steamGame.content_descriptorids,
});
