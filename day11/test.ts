import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import {
  copyTable,
  countSeatTypeInTable,
  getAdjacent,
  hasAtLeast,
  hasExact,
  main,
  Seat,
  seatIsEmpty,
  seatIsOccupied,
  SeatType,
  Table,
} from "./day11.ts";

Deno.test("should get adjacent from table", () => {
  const input: Table = [
    [".", ".", "."],
    ["#", "#", "#"],
    ["L", "L", "L"],
  ];
  const result1 = getAdjacent(0, 0, input);
  const expected1 = [".", "#", "#"];
  assertEquals(result1, expected1);

  const result2 = getAdjacent(0, 1, input);
  const expected2 = [".", ".", "#", "#", "#"];
  assertEquals(result2, expected2);

  const result3 = getAdjacent(0, 2, input);
  const expected3 = [".", "#", "#"];
  assertEquals(result3, expected3);

  const result4 = getAdjacent(1, 0, input);
  const expected4 = [".", ".", "#", "L", "L"];
  assertEquals(result4, expected4);

  const result5 = getAdjacent(1, 1, input);
  const expected5 = [".", ".", ".", "#", "#", "L", "L", "L"];
  assertEquals(result5, expected5);

  const result6 = getAdjacent(1, 2, input);
  const expected6 = [".", ".", "#", "L", "L"];
  assertEquals(result6, expected6);

  const result7 = getAdjacent(2, 0, input);
  const expected7 = ["#", "#", "L"];
  assertEquals(result7, expected7);

  const result8 = getAdjacent(2, 1, input);
  const expected8 = ["#", "#", "#", "L", "L"];
  assertEquals(result8, expected8);

  const result9 = getAdjacent(2, 2, input);
  const expected9 = ["#", "#", "L"];
  assertEquals(result9, expected9);
});

Deno.test("seatIsEmpty", () => {
  assertEquals(seatIsEmpty("L"), true);
  assertEquals(seatIsEmpty("#"), false);
  assertEquals(seatIsEmpty("."), false);
});

Deno.test("seatIsOccupied", () => {
  assertEquals(seatIsOccupied("#"), true);
  assertEquals(seatIsOccupied("L"), false);
  assertEquals(seatIsOccupied("."), false);
});

Deno.test("hasAtLeast", () => {
  const seats: Seat[] = [".", ".", ".", "#", "#", "#", "L", "L", "L"];

  assertEquals(hasAtLeast(2, ".", seats), true);
  assertEquals(hasAtLeast(2, "#", seats), true);
  assertEquals(hasAtLeast(2, "L", seats), true);

  assertEquals(hasAtLeast(3, ".", seats), true);
  assertEquals(hasAtLeast(3, "#", seats), true);
  assertEquals(hasAtLeast(3, "L", seats), true);

  assertEquals(hasAtLeast(4, ".", seats), false);
  assertEquals(hasAtLeast(4, "#", seats), false);
  assertEquals(hasAtLeast(4, "L", seats), false);
});

Deno.test("hasExact", () => {
  const seats: Seat[] = [".", "#", "#", "L", "L", "L"];

  assertEquals(hasExact(1, ".", seats), true);
  assertEquals(hasExact(2, ".", seats), false);
  assertEquals(hasExact(3, ".", seats), false);
  assertEquals(hasExact(4, ".", seats), false);

  assertEquals(hasExact(1, "#", seats), false);
  assertEquals(hasExact(2, "#", seats), true);
  assertEquals(hasExact(3, "#", seats), false);
  assertEquals(hasExact(4, "#", seats), false);

  assertEquals(hasExact(1, "L", seats), false);
  assertEquals(hasExact(2, "L", seats), false);
  assertEquals(hasExact(3, "L", seats), true);
  assertEquals(hasExact(4, "L", seats), false);
});

Deno.test("should return copy of table", () => {
  const input: Table = [
    [".", ".", "."],
    ["#", "#", "#"],
    ["L", "L", "L"],
  ];

  const result = copyTable(input);
  assertEquals(input, result);
});

Deno.test("should count number of seat types in a table", () => {
  const table: Table = [
    [".", ".", "#"],
    ["#", "#", "#"],
    ["L", "L", "L"],
  ];

  const result1 = countSeatTypeInTable("L", table);
  assertEquals(result1, 3);

  const result2 = countSeatTypeInTable("#", table);
  assertEquals(result2, 4);

  const result3 = countSeatTypeInTable(".", table);
  assertEquals(result3, 2);
});

Deno.test("day11 result", () => {
  assertEquals(main(), 2152);
});
