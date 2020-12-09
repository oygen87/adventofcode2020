import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { findMatchingPairOfSum } from "./day1.ts";

Deno.test("Should find matching pair from list", () => {
  const input = [1, 5, 10, 25, 75, 200, 210];

  const result1 = findMatchingPairOfSum(input, 100);
  assertEquals(result1.firstNum, 25);
  assertEquals(result1.secondNum, 75);

  const result2 = findMatchingPairOfSum(input, 210);
  assertEquals(result2.firstNum, 10);
  assertEquals(result2.secondNum, 200);
});

Deno.test("Should return properties with value of null when not finding a pair", () => {
  const input = [1, 5, 10, 25, 75, 200, 210];

  const result = findMatchingPairOfSum(input, 25);
  assertEquals(result.firstNum, null);
  assertEquals(result.secondNum, null);
});
