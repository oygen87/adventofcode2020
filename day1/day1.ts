export const main = () => {
  const input: string[] = Deno.readTextFileSync("./input.txt").split("\r\n");
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

main();
