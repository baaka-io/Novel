import { Request, Response } from "trainstation";

export const url = "test";

export default function helloWorld(req: Request, res: Response) {
  res.send("Hello World");
}
