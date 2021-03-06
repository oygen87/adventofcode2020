import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { main, runProgram, toInstructionModel } from "./day8.ts";

Deno.test("Should map raw input to InstructionModel", () => {
  const input = [
    "jmp +22",
    "jmp -44",
    "acc +100",
    "acc -50",
    "nop +99",
    "nop -33",
  ];
  const result = input.map(toInstructionModel);
  const expected = [
    { id: "0jmp +22", command: "jmp", value: 22, isExecuted: false },
    { id: "1jmp -44", command: "jmp", value: -44, isExecuted: false },
    { id: "2acc +100", command: "acc", value: 100, isExecuted: false },
    { id: "3acc -50", command: "acc", value: -50, isExecuted: false },
    { id: "4nop +99", command: "nop", value: 99, isExecuted: false },
    { id: "5nop -33", command: "nop", value: -33, isExecuted: false },
  ];
  assertEquals(result, expected);
});

Deno.test("Should run program and return acc", () => {
  const input = [
    "acc +99",
    "nop -22",
    "acc -50",
    "jmp +2",
    "acc -200",
    "jmp -5",
  ];
  const instructions = input.map(toInstructionModel);

  const result = runProgram(instructions);

  const expected = 49;

  assertEquals(result, expected);
});

Deno.test("day8 result", () => {
  assertEquals(main(), 1394);
});
