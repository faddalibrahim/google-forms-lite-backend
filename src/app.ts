import * as dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from "express";
import v1Router from "./routes/v1";
import dbConnection from "./config/db-config";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  console.log(req.cookies);
  res.json({ app: "xyforms-api", "api-version": "1.0" });
});

app.use("/v1", v1Router);

const PORT = process.env.PORT || 3000;

dbConnection()
  .then(() => {
    console.log("Connected to the database!");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
