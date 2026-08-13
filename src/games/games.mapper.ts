import type { SteamAppDetails, SteamOwnedGame } from "../steam/steam.types.js";
import type { Game, StoreGameDetails } from "./games.types.js";

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

export const toStoreGame = (steamApp: SteamAppDetails): StoreGameDetails => ({
  id: steamApp.steam_appid,
  name: steamApp.name,
  shortDescription: steamApp.short_description,
  headerImage: steamApp.header_image,
  backgroundImage: steamApp.background,
  developers: steamApp.developers,
  publishers: steamApp.publishers,
  genres: steamApp.genres.map((genre) => genre.description),
  categories: steamApp.categories.map((category) => category.description),
  releaseDate: new Date(steamApp.release_date.date),
  comingSoon: steamApp.release_date.coming_soon,
  website: steamApp.website,
  screenshots:
    steamApp.screenshots?.map((screenshot) => ({
      thumbnail: screenshot.path_thumbnail,
      full: screenshot.path_full,
    })) || [],
});
