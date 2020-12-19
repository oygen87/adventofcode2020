import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { findMatchingPairFromList, main } from "./day9.ts";

Deno.test("Should find matching pair in previous N numbers from list X", () => {
  const input = [5, 10, 25, 40, 50, 65, 90, 85, 125, 140, 180, 345, 500];

  const result1 = findMatchingPairFromList(input, 4);
  assertEquals(result1, 85);

  const result2 = findMatchingPairFromList(input, 8);
  assertEquals(result2, 345);
});

Deno.test("day9 result", () => {
  assertEquals(main(), 1492208709);
});
