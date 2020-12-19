import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

type Command = "acc" | "jmp" | "nop";

interface InstructionModel {
  id: string;
  command: Command;
  value: number;
  isExecuted: boolean;
}

export const toInstructionModel = (el: string, index: number) => {
  const command: Command = el.split(" ")[0] as Command;
  const value: number = Number(el.split(" ")[1]);

  return {
    id: index + el,
    command,
    value,
    isExecuted: false,
  };
};

export const runProgram = (instructions: InstructionModel[]): number => {
  const previousCommands: { [id: string]: boolean } = {};
  let acc = 0;
  let position = 0;

  while (true) {
    const instruction: InstructionModel = instructions[position];

    if (instruction.isExecuted) {
      return acc;
    }

    switch (instruction.command) {
      case "acc":
        acc += instruction.value;
        position++;
        break;
      case "jmp":
        position += instruction.value;
        break;
      case "nop":
        position++;
    }

    instruction.isExecuted = true;
  }
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split("\r\n");

  const instructions: InstructionModel[] = input.map(toInstructionModel);

  const result = runProgram(instructions);

  console.log(result);

  return result;
};
