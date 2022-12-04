import { categories } from "./data/data.js";
import { client } from "../src/databases/postgres.js";

async function main() {
  await client.category.createMany({
    data: categories,
    skipDuplicates: true,
  });
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(0);
  })
  .finally(() => {
    client.$disconnect();
  });
