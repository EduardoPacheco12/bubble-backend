import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function SignIn(req: Request, res: Response) {
  const { email, password } = req.body;

  const info = await authService.SignIn(email, password);

  res.status(200).send(info);
}

export async function SignUp(req: Request, res: Response) {
  const { name, email, password, picture, category } = req.body;

  await authService.SignUp(name, email, password, picture, category);

  res.status(201).send("User created");
}
