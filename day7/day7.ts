import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export const removeParentFromList = (
  color: string,
  list: string[],
): string[] => {
  return list.filter((el) => !el.startsWith(color));
};

export const findAllDirectParentsForColor = (
  color: string,
  list: string[],
): string[] => {
  const colorRows = list.filter((el) => el.includes(color));
  return colorRows.map((el) => el.split("bags")[0].trim());
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split("\r\n");

  let listWithoutFoundColors: string[] = removeParentFromList(
    "shiny gold",
    input,
  );

  const listOfDirectParents: string[] = findAllDirectParentsForColor(
    "shiny gold",
    listWithoutFoundColors,
  );

  let totalColors = [...listOfDirectParents];

  while (true) {
    let didFindAnyParents = false;
    totalColors.forEach((color) => {
      const foundParentColors = findAllDirectParentsForColor(
        color,
        [...listWithoutFoundColors],
      );

      if (foundParentColors.length > 0) {
        foundParentColors.forEach((parent) => {
          if (!totalColors.includes(parent)) {
            totalColors.push(parent);
            didFindAnyParents = true;
          }
        });
      }

      listWithoutFoundColors = removeParentFromList(
        color,
        [...listWithoutFoundColors],
      );
    });

    if (!didFindAnyParents) {
      break;
    }
  }

  const result = totalColors.length;

  console.log(totalColors.length);

  return result;
};
