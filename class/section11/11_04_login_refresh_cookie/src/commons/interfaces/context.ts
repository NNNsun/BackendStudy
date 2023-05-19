//res.setHeader를 사용하려면 nestjs 자체 express이 아닌 기존 express를 사용해야한다
import { Request, Response } from 'express';
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
