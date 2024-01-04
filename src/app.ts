// app.ts
import express, { Request, Response } from "express";
import userRouter from "./routes/user";
import formRouter from "./routes/form";
import formResponseRouter from "./routes/form_response";

const app = express();
const port = 3000;

app.use("/user", userRouter);
app.use("/form", formRouter);
app.use("/form_response", formResponseRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
