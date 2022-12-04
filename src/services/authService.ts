import bcrypt from "bcrypt";
import * as authRepository from "../repositories/authRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";

export async function SignIn() {}

export async function SignUp(name: string, email: string, password: string, picture: string, category: string) {
  const verifyEmail = await authRepository.findEmail(email);
  if (verifyEmail) {
    throw conflictError("Email already exists");
  }

  const verifyCategory = await authRepository.findCategory(category);
  if (!verifyCategory) {
    throw notFoundError("Category not found");
  }

  const encryptedPassword: string = bcrypt.hashSync(password, 10);

  await authRepository.insertUser(name, email, encryptedPassword, picture, verifyCategory.id);
}
