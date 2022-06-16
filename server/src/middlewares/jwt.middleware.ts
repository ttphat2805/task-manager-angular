import { NextFunction } from "connect";
import { Request, Response } from "express";
import * as jwtUtil from "../utils/jwt.util";

const jwt = (req: Request, res: Response, next: NextFunction) => {

  if (req.headers["x-token"]) {
    const token = req.headers["x-token"].toString();
    try {
      const user = jwtUtil.verify(token);

      if (user) {
        req.body.user = user;
        next();
        return;
      }
    } catch (exception) {
      res.status(401);
      res.send("Unauthorized");
    }
  }
  res.status(401);
  res.send("Unauthorized");
};

export default jwt;
