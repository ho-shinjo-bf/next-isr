import { readFile } from "fs/promises";
import path from "path";

interface BreadData {
  id: string;
  name: string;
  price: number;
}

export async function getBreadsFromDB() {
  const jsonContents = await readFile(path.resolve("./data.json"), "utf-8");

  return JSON.parse(jsonContents) as BreadData[];
}

export async function getBreadById(id: string) {
  const breads = await getBreadsFromDB();

  return breads.find((bread) => bread.id === id);
}
