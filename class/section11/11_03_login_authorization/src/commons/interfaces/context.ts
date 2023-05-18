export interface IAuthUser {
  user?: {
    id: string;
  };
}

export interface IContext {
  // import express
  req: Request & IAuthUser;
  res: Response; // import express
}
