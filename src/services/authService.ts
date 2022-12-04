import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository.js";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils.js";

export async function SignIn(email: string, password: string) {
  const verifyEmail = await authRepository.findEmail(email);
  if (!verifyEmail) {
    throw notFoundError("Email not found");
  }

  const verifyPassword: boolean = bcrypt.compareSync(password, verifyEmail.password);
  if (!verifyPassword) {
    throw unauthorizedError("Wrong password, try again");
  }

  const verifyCategory = await authRepository.findCategoryById(verifyEmail.categoryId);
  if (!verifyCategory) {
    throw notFoundError("Category not found");
  }

  const id: number = verifyEmail.id;
  const token = jwt.sign({ id }, process.env.SECRET!, {
    expiresIn: 36000, //3h
  });

  const info = {
    token,
    name: verifyEmail.name,
    picture: verifyEmail.picture,
    category: verifyCategory.name,
  };

  return info;
}

export async function SignUp(name: string, email: string, password: string, picture: string, category: string) {
  const verifyEmail = await authRepository.findEmail(email);
  if (verifyEmail) {
    throw conflictError("Email already exists");
  }

  const verifyCategory = await authRepository.findCategoryByName(category);
  if (!verifyCategory) {
    throw notFoundError("Category not found");
  }

  const encryptedPassword: string = bcrypt.hashSync(password, 10);

  await authRepository.insertUser(name, email, encryptedPassword, picture, verifyCategory.id);
}
