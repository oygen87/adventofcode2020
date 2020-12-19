import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { byAscending, countNumberOfJumps, main, toNumber } from "./day10.ts";

Deno.test("should map strings to numbers", () => {
  const input = ["1", "2", "3"];
  const result = input.map(toNumber);
  const expected = [1, 2, 3];
  assertEquals(result, expected);
});

Deno.test("should sort number by ascending order", () => {
  const input = [9, 44, 1000, 33, 66, 1, 100];
  const result = input.sort(byAscending);
  const expected = [1, 9, 33, 44, 66, 100, 1000];
  assertEquals(result, expected);
});

Deno.test("should count number of jumps and difference in jump length", () => {
  const input = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
  const sortedInput = input.sort(byAscending);
  const result = countNumberOfJumps(sortedInput);
  const expected = { oneJump: 7, twoJumps: 0, threeJumps: 5, lastNum: 19 };
  assertEquals(result, expected);
});

Deno.test("day10 result", () => {
  assertEquals(main(), 3000);
});
