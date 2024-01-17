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
      (err: JsonWebTokenError | null, decodedToken: any) => {
        if (err) {
          console.log(err.message);

          res.status(400).json({
            successful: false,
            message: "Token is not valid",
          });
        } else {
          console.log(decodedToken);
          next();
        }
      }
    );
  } else {
    res.status(400).json({
      successful: false,
      message: "Token not provided",
    });
  }
};

export const getCurrentUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  const JWT_SECRET = process.env.JWT_SECRET || "";
  if (token) {
    jwt.verify(token, JWT_SECRET, async (err: JsonWebTokenError | null, decodedToken: any) => {
      if (err) {
        res.locals.user = null;
        next()
      }
      let user = await User.findById(decodedToken.id)
      res.locals.user = user;
      next()
     });
  }

  res.locals.user = null;
  next();
}
