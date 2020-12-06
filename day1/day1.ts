import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split("\r\n");
  const data: number[] = input.map((el) => Number(el));

  for (const firstNum of data) {
    const secondNum = 2020 - firstNum;
    const secondNumberExists = data.find((el) => el === secondNum);

    if (secondNumberExists) {
      const answer = firstNum * secondNum;
      console.log(answer);
      break;
    }
  }
};

