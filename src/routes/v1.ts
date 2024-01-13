import express, { Router, Request, Response } from "express";
import usersRouter from "./v1/users.route";
import formsRotuer from "./v1/forms.route";
import formResponsesRouter from "./v1/form-responses.route";
import authRouter from "./v1/auth.route";
import formContentsRouter from "./v1/form-contents.route";

const v1Router: Router = express.Router();

// Middleware for API version 1
v1Router.use((req: Request, res: Response, next) => {
  console.log("API Version: v1");
  next();
});

// Subroutes for API version 1
v1Router.use("/auth", authRouter);
v1Router.use("/users", usersRouter);
v1Router.use("/forms", formsRotuer);
v1Router.use("/form-contents", formContentsRouter);
v1Router.use("/form-responses", formResponsesRouter);

export default v1Router;
