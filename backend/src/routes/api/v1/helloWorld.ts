import { Request, Response } from "trainstation";

export const url = "hello";

export default function helloWorld(req: Request, res: Response) {
  res.send("Hello World");
}
