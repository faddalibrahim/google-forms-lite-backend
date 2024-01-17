import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.jwt;
  const JWT_SECRET = process.env.JWT_SECRET || "";

  // check json web token exists & is verified
  if (token) {
    jwt.verify(
      token,
      JWT_SECRET,
      async (err: JsonWebTokenError | null, decodedToken: any) => {
        if (err) {
          res.status(400).json({
            successful: false,
            message: "Token is not valid",
          });
        }
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    );
  }
  res.status(400).json({
    successful: false,
    message: "Token not provided",
  });
};
