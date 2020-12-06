export const groupAnswers = (input: string[]): string[] => {
  const indexOfLastRow = input.length - 1;

  const groups: string[] = [];
  let currentGroup = "";

  input.forEach((row, i) => {
    if (row.length !== 0) {
      currentGroup += row;
      if (i === indexOfLastRow) {
        groups.push(currentGroup.trim());
      }
    } else {
      groups.push(currentGroup.trim());
      currentGroup = "";
    }
  });

  return groups;
};

export const toAnsweredQuestions = (answers: string): number => {
  const map: { [char: string]: number } = {};
  answers.split("").forEach((c) => map[c] = map[c] ? 1 : map[c]++);
  return Object.keys(map).length;
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync("./input.txt").split("\r\n");

  const groups = groupAnswers(input);

  const answers = groups.map(toAnsweredQuestions);

  const total = answers.reduce((acc, curr) => acc + curr, 0);

  console.log(total);
};

main();
