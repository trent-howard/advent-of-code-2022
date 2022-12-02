import { createReadStream } from "fs";
import { createInterface } from "readline/promises";

export const readFile = (filePath: string) => {
  const input = createReadStream(filePath, "utf-8");
  const lineReader = createInterface({ input });

  return lineReader;
};
