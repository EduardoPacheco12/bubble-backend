import { User } from "@prisma/client";

export type signInBody = Omit<User, "id" | "name" | "picture" | "categoryId">;

export type signUpBody = {
  name: string;
  email: string;
  password: string;
  picture: string;
  category: string;
};
