import "express";

declare global {
  namespace Express {
    interface Auth extends JwtPayload {}
    interface User extends PassportSteamUser {}

    interface Request {
      auth: Auth;
      user: User;
    }
  }
}

export {};
