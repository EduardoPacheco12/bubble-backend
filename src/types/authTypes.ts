import { User } from "@prisma/client";

interface category {
  Professor: string;
  Aluno: string;
}

export type signInBody = Omit<User, "id" | "name" | "picture" | "categoryId">;

export type signUpBody = {
  name: string;
  email: string;
  password: string;
  picture: string;
  category: category;
};
