import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export const findMatchingPairFromList = (
  list: number[],
  startIndex: number,
) => {
  for (let i = startIndex; i < list.length; i++) {
    const currentNumber = list[i];
    const previousnumbers: number[] = list.slice(i - startIndex, i);

    let didFindMatchingPair = false;
    previousnumbers.forEach((num) => {
      if (previousnumbers.includes(currentNumber - num)) {
        didFindMatchingPair = true;
      }
    });

    if (!didFindMatchingPair) {
      return (list[i]);
    }
  }
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split("\r\n");

  const numbers: number[] = input.map((s) => Number(s));

  const result = findMatchingPairFromList(numbers, 25);

  console.log(result);

  return result;
};
