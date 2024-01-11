// app.ts
import express, { Request, Response } from "express";
import v1Router from "./routes/v1";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.use("/v1", v1Router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
