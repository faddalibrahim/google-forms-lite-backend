import express, { Request, Response } from "express";
import v1Router from "./routes/v1";
import dbConnection from "./config/db-config";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ app: "xyforms-api", "api-version": "1.0" });
});

app.use("/v1", v1Router);

const port = 3000;

dbConnection()
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
