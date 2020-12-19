import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { findMatchingPairOfSum, main } from "./day1.ts";

Deno.test("Should find matching pair from list and return success", () => {
  const input = [1, 5, 10, 25, 75, 200, 210];

  const result1 = findMatchingPairOfSum(input, 100);
  assertEquals(result1.firstNum, 25);
  assertEquals(result1.secondNum, 75);
  assertEquals(result1.success, true);

  const result2 = findMatchingPairOfSum(input, 210);
  assertEquals(result2.firstNum, 10);
  assertEquals(result2.secondNum, 200);
  assertEquals(result2.success, true);
});

Deno.test("Should return properties with value of zero and success false when not finding a pair", () => {
  const input = [1, 5, 10, 25, 75, 200, 210];

  const result = findMatchingPairOfSum(input, 25);
  assertEquals(result.firstNum, 0);
  assertEquals(result.secondNum, 0);
  assertEquals(result.success, false);
});

Deno.test("day1 result", () => {
  assertEquals(main(), 751776);
});
