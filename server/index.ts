import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

const corsOptions = {
  origin: "localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/users", (req: Request, res: Response) => {
  res.send([
    {
      id: 0,
      username: "Ramsay",
    },
    {
      id: 1,
      username: "Irvan",
    },
    {
      id: 2,
      username: "Sam",
    },
  ]);
});
