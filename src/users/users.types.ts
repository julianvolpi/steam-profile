export enum PersonaStateEnum {
  OFFLINE = 0,
  ONLINE = 1,
  BUSY = 2,
  AWAY = 3,
  SNOOZE = 4,
  LOOKING_TO_TRADE = 5,
  LOOKING_TO_PLAY = 6,
}

export enum CommunityVisibilityStateEnum {
  PRIVATE = 1,
  PUBLIC = 3,
}

export interface UserProfile {
  steamId: string;

  displayName: string;
  profileUrl: string;
  profileState: number;
  communityVisibilityState: CommunityVisibilityStateEnum;

  avatar: string;
  avatarMedium: string;
  avatarFull: string;

  status: PersonaStateEnum;

  lastLogoff?: Date;
  accountCreatedAt?: Date;

  realName?: string;

  clanId?: string | undefined;

  countryCode?: string;
  stateCode?: string;
  cityId?: number | undefined;

  currentGame?:
    | {
        appId: number | undefined;
        name: string | undefined;
      }
    | undefined;

  friendSince?: Date | undefined;
}
