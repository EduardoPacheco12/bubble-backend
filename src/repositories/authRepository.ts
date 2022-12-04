import { client } from "../databases/postgres.js";

export async function findEmail(email: string) {
  return await client.user.findUnique({
    where: {
      email,
    },
  });
}

export async function findCategoryByName(category: string) {
  return await client.category.findUnique({
    where: {
      name: category,
    },
  });
}

export async function findCategoryById(categoryId: number) {
  return await client.category.findUnique({
    where: {
      id: categoryId,
    },
  });
}

export async function insertUser(name: string, email: string, password: string, picture: string, categoryId: number) {
  return await client.user.create({
    data: {
      name,
      email,
      password,
      picture,
      categoryId,
    },
  });
}
