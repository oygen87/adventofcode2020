import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split(/\r?\n/);

  let posX = 0;
  let hits = 0;

  input.forEach((row, index) => {
    if (index !== 0) {
      posX += 3;

      while (true) {
        if (row[posX] === undefined) {
          row += row;
        } else {
          break;
        }
      }
    }

    if (row[posX] === "#") {
      hits++;
    }
  });

  console.log(hits);

  return hits;
};
