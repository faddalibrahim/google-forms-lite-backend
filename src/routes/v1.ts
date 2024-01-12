import express, { Router, Request, Response } from "express";
import usersRouter from "./v1/users";
import formsRotuer from "./v1/forms";
import formResponsesRouter from "./v1/form-responses";

const v1Router: Router = express.Router();

// Middleware for API version 1
v1Router.use((req: Request, res: Response, next) => {
  console.log("API Version: v1");
  next();
});

// Subroutes for API version 1
v1Router.use("/users", usersRouter);
v1Router.use("/forms", formsRotuer);
v1Router.use("/form-responses", formResponsesRouter);

export default v1Router;
