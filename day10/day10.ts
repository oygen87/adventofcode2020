import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

interface Jumps {
  oneJump: number;
  twoJumps: number;
  threeJumps: number;
  lastNum: number;
}

export const toNumber = (s: string) => Number(s);
export const byAscending = (a: number, b: number) => a - b;
export const countNumberOfJumps = (sorted: number[]): Jumps => {
  return sorted.reduce((prev, curr) => {
    const difference = curr - prev.lastNum;
    switch (difference) {
      case 1:
        return { ...prev, oneJump: prev.oneJump + 1, lastNum: curr };
      case 2:
        return { ...prev, twoJumps: prev.twoJumps + 1, lastNum: curr };
      case 3:
        return { ...prev, threeJumps: prev.threeJumps + 1, lastNum: curr };
      default:
        return { ...prev };
    }
  }, { oneJump: 0, twoJumps: 0, threeJumps: 1, lastNum: 0 });
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split("\r\n");

  const numbers: number[] = input.map(toNumber);
  const sorted = numbers.sort(byAscending);
  const counts: Jumps = countNumberOfJumps(sorted);
  const result = counts.oneJump * counts.threeJumps;

  console.log(result);

  return result;
};
