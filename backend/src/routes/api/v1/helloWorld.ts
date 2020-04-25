import { Request, Response } from "trainstation";

export const url = "pls";

export default function helloWorld(req: Request, res: Response) {
  res.send("Hello World");
}
