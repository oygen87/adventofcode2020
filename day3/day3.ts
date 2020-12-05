export const main = () => {
  const input: string[] = Deno.readTextFileSync("./input.txt").split("\r\n");

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
};

main();
