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
