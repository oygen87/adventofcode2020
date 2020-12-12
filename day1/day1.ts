import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export const findMatchingPairOfSum = (
  list: number[],
  sum: number,
): { firstNum: number; secondNum: number; success: boolean } => {
  for (const firstNum of list) {
    const secondNum = sum - firstNum;
    const secondNumberExists = list.find((el) => el === secondNum);

    if (secondNumberExists) {
      return { firstNum, secondNum, success: true };
    }
  }

  return { firstNum: 0, secondNum: 0, success: false };
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split("\r\n");
  
  const list: number[] = input.map((el) => Number(el));

  const { firstNum, secondNum, success } = findMatchingPairOfSum(list, 2020);

  if (success) {
    const result = firstNum * secondNum;
    console.log(result);
  }
};
