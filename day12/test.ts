import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import {
  executeInstruction,
  Instruction,
  main,
  Position,
  toInstruction,
} from "./day12.ts";

Deno.test("Should map raw instruction to Instruction", () => {
  assertEquals(
    toInstruction("N7"),
    { type: "MOVEMENT", direction: "N", value: 7 },
  );
  assertEquals(
    toInstruction("S18"),
    { type: "MOVEMENT", direction: "S", value: 18 },
  );
  assertEquals(
    toInstruction("W220"),
    { type: "MOVEMENT", direction: "W", value: 220 },
  );
  assertEquals(
    toInstruction("E99"),
    { type: "MOVEMENT", direction: "E", value: 99 },
  );

  assertEquals(
    toInstruction("R90"),
    { type: "ROTATION", direction: "R", value: 90 },
  );
  assertEquals(
    toInstruction("L270"),
    { type: "ROTATION", direction: "L", value: 270 },
  );

  assertEquals(toInstruction("F100"), { type: "FORWARD", value: 100 });
});

Deno.test("Should execute and move to instruction", () => {
  const startPosition1: Position = { direction: "E", x: 0, y: 0 };
  const instruction1: Instruction = {
    type: "MOVEMENT",
    direction: "S",
    value: 18,
  };
  const newPosition1 = executeInstruction(instruction1, startPosition1);
  const expected1 = { direction: "E", x: 0, y: -18 };
  assertEquals(newPosition1, expected1);

  const startPosition2: Position = { direction: "W", x: 20, y: 50 };
  const instruction2: Instruction = {
    type: "MOVEMENT",
    direction: "N",
    value: 30,
  };
  const newPosition2 = executeInstruction(instruction2, startPosition2);
  const expected2 = { direction: "W", x: 20, y: 80 };
  assertEquals(newPosition2, expected2);

  const startPosition3: Position = { direction: "S", x: 40, y: 90 };
  const instruction3: Instruction = {
    type: "MOVEMENT",
    direction: "W",
    value: 10,
  };
  const newPosition3 = executeInstruction(instruction3, startPosition3);
  const expected3 = { direction: "S", x: 30, y: 90 };
  assertEquals(newPosition3, expected3);

  const startPosition4: Position = { direction: "N", x: 5, y: 25 };
  const instruction4: Instruction = {
    type: "MOVEMENT",
    direction: "E",
    value: 35,
  };
  const newPosition4 = executeInstruction(instruction4, startPosition4);
  const expected4 = { direction: "N", x: 40, y: 25 };
  assertEquals(newPosition4, expected4);
});

Deno.test("Should execute instruction and rotate", () => {
  const startPosition1: Position = { direction: "E", x: 20, y: 50 };
  const instruction1: Instruction = {
    type: "ROTATION",
    direction: "L",
    value: 90,
  };
  const newPosition1 = executeInstruction(instruction1, startPosition1);
  const expected1 = { direction: "N", x: 20, y: 50 };
  assertEquals(newPosition1, expected1);

  const startPosition2: Position = { direction: "E", x: 20, y: 50 };
  const instruction2: Instruction = {
    type: "ROTATION",
    direction: "L",
    value: 180,
  };
  const newPosition2 = executeInstruction(instruction2, startPosition2);
  const expected2 = { direction: "W", x: 20, y: 50 };
  assertEquals(newPosition2, expected2);

  const startPosition3: Position = { direction: "E", x: 20, y: 50 };
  const instruction3: Instruction = {
    type: "ROTATION",
    direction: "L",
    value: 270,
  };
  const newPosition3 = executeInstruction(instruction3, startPosition3);
  const expected3 = { direction: "S", x: 20, y: 50 };
  assertEquals(newPosition3, expected3);

  const startPosition4: Position = { direction: "E", x: 20, y: 50 };
  const instruction4: Instruction = {
    type: "ROTATION",
    direction: "L",
    value: 360,
  };
  const newPosition4 = executeInstruction(instruction4, startPosition4);
  const expected4 = { direction: "E", x: 20, y: 50 };
  assertEquals(newPosition4, expected4);

  const startPosition5: Position = { direction: "N", x: 10, y: 10 };
  const instruction5: Instruction = {
    type: "ROTATION",
    direction: "L",
    value: 720,
  };
  const newPosition5 = executeInstruction(instruction5, startPosition5);
  const expected5 = { direction: "N", x: 10, y: 10 };
  assertEquals(newPosition5, expected5);

  const startPosition6: Position = { direction: "N", x: 10, y: 10 };
  const instruction6: Instruction = {
    type: "ROTATION",
    direction: "L",
    value: 90,
  };
  const newPosition6 = executeInstruction(instruction6, startPosition6);
  const expected6 = { direction: "W", x: 10, y: 10 };
  assertEquals(newPosition6, expected6);

  const startPosition7: Position = { direction: "N", x: 10, y: 10 };
  const instruction7: Instruction = {
    type: "ROTATION",
    direction: "L",
    value: 180,
  };
  const newPosition7 = executeInstruction(instruction7, startPosition7);
  const expected7 = { direction: "S", x: 10, y: 10 };
  assertEquals(newPosition7, expected7);

  const startPosition8: Position = { direction: "N", x: 10, y: 10 };
  const instruction8: Instruction = {
    type: "ROTATION",
    direction: "L",
    value: 270,
  };
  const newPosition8 = executeInstruction(instruction8, startPosition8);
  const expected8 = { direction: "E", x: 10, y: 10 };
  assertEquals(newPosition8, expected8);
});

Deno.test("day12 result", () => {
  assertEquals(main(), 1838);
});
