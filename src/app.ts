// app.ts
import express, { Request, Response } from "express";
import v1Router from "./routes/v1";

const app = express();
app.use(express.json());
const port = 3000;

app.post("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
  console.log(req.body);
});

// app.use("/v1", express.json());
app.use("/v1", v1Router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
