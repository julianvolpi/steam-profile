export interface Game {
  id: number;
  name: string;
  playtimeForever: number;
  iconUrl: string;

  playtime2weeks: number | undefined;
  rtimeLastPlayed: number | undefined;
  hasCommunityVisibleStats: boolean | undefined;
  hasLeaderboards: boolean | undefined;
  contentDescriptorIds: number[] | undefined;
}
