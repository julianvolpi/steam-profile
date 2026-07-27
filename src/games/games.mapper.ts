import type { SteamOwnedGame } from "../steam/steam.types.js";
import type { Game } from "./games.types.js";

export const toGame = (steamGame: SteamOwnedGame): Game => ({
  id: steamGame.appid,
  name: steamGame.name,
  playtimeForever: steamGame.playtime_forever,
  imageUrl: `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${steamGame.appid}/library_600x900.jpg`,
  playtime2weeks: steamGame.playtime_2weeks,
  lastPlayedAt: steamGame.rtime_last_played
    ? new Date(steamGame.rtime_last_played * 1000)
    : undefined,
  hasCommunityVisibleStats: steamGame.has_community_visible_stats,
  hasLeaderboards: steamGame.has_leaderboards,
  contentDescriptorIds: steamGame.content_descriptorids,
});
