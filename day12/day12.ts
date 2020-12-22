import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export interface Position {
  direction: "E" | "W" | "N" | "S";
  x: number;
  y: number;
}

export interface Instruction {
  type: "MOVEMENT" | "ROTATION" | "FORWARD";
  value: number;
  direction?: string;
}

export const toInstruction = (s: string): Instruction => {
  const typeOf = s.substring(0, 1);
  const value = +s.substring(1);

  const instruction = { value } as Instruction;

  if (typeOf === "N" || typeOf === "S" || typeOf === "E" || typeOf === "W") {
    instruction.type = "MOVEMENT";
    instruction.direction = typeOf;
  }
  if (typeOf === "L" || typeOf === "R") {
    instruction.type = "ROTATION";
    instruction.direction = typeOf;
    instruction.value = value % 360;
  }
  if (typeOf === "F") {
    instruction.type = "FORWARD";
  }

  return { ...instruction };
};

export const executeInstruction = (
  instruction: Instruction,
  position: Position,
): Position | undefined => {
  if (instruction.type === "FORWARD") {
    switch (position.direction) {
      case "N":
        return { ...position, y: position.y + instruction.value };
      case "S":
        return { ...position, y: position.y - instruction.value };
      case "E":
        return { ...position, x: position.x + instruction.value };
      case "W":
        return { ...position, x: position.x - instruction.value };
    }
  }

  if (instruction.type === "MOVEMENT") {
    switch (instruction.direction) {
      case "N":
        return { ...position, y: position.y + instruction.value };
      case "S":
        return { ...position, y: position.y - instruction.value };
      case "E":
        return { ...position, x: position.x + instruction.value };
      case "W":
        return { ...position, x: position.x - instruction.value };
    }
  }

  if (instruction.type === "ROTATION") {
    if (instruction.value % 360 === 0) {
      return { ...position };
    }
    if (position.direction === "N" && instruction.value % 360 === 90) {
      return {
        ...position,
        direction: instruction.direction === "L" ? "W" : "E",
      };
    }
    if (position.direction === "N" && instruction.value % 360 === 180) {
      return { ...position, direction: "S" };
    }
    if (position.direction === "N" && instruction.value % 360 === 270) {
      return {
        ...position,
        direction: instruction.direction === "L" ? "E" : "W",
      };
    }
    if (position.direction === "E" && instruction.value % 360 === 90) {
      return {
        ...position,
        direction: instruction.direction === "L" ? "N" : "S",
      };
    }
    if (position.direction === "E" && instruction.value % 360 === 180) {
      return { ...position, direction: "W" };
    }
    if (position.direction === "E" && instruction.value % 360 === 270) {
      return {
        ...position,
        direction: instruction.direction === "L" ? "S" : "N",
      };
    }
    if (position.direction === "S" && instruction.value % 360 === 90) {
      return {
        ...position,
        direction: instruction.direction === "L" ? "E" : "W",
      };
    }
    if (position.direction === "S" && instruction.value % 360 === 180) {
      return { ...position, direction: "N" };
    }
    if (position.direction === "S" && instruction.value % 360 === 270) {
      return {
        ...position,
        direction: instruction.direction === "L" ? "W" : "E",
      };
    }
    if (position.direction === "W" && instruction.value % 360 === 90) {
      return {
        ...position,
        direction: instruction.direction === "L" ? "S" : "N",
      };
    }
    if (position.direction === "W" && instruction.value % 360 === 180) {
      return { ...position, direction: "E" };
    }
    if (position.direction === "W" && instruction.value % 360 === 270) {
      return {
        ...position,
        direction: instruction.direction === "L" ? "N" : "S",
      };
    }
  }
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split(/\r?\n/);

  let position: Position = {
    direction: "E",
    x: 0,
    y: 0,
  };

  const instructionList: Instruction[] = input.map(toInstruction);

  instructionList.forEach((instruction) => {
    position = executeInstruction(instruction, position) as Position;
  });

  const manhattanDistance = Math.abs(position.x) + Math.abs(position.y);

  console.log(manhattanDistance);

  return manhattanDistance;
};
