export interface Game {
  id: number;
  name: string;
  playtimeForever: number;
  imageUrl: string;

  playtime2weeks: number | undefined;
  lastPlayedAt?: Date | undefined;
  hasCommunityVisibleStats: boolean | undefined;
  hasLeaderboards: boolean | undefined;
  contentDescriptorIds: number[] | undefined;
}

export interface StoreGameDetails {
  id: number;
  name: string;
  shortDescription: string;
  headerImage: string;
  backgroundImage?: string | undefined;
  developers: string[];
  publishers: string[];
  genres: string[];
  categories: string[];
  releaseDate: Date;
  comingSoon: boolean;
  website?: string | undefined;
  screenshots: Screenshot[];
}

export interface Screenshot {
  thumbnail: string;
  full: string;
}
