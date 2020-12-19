import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { main } from "./day3.ts";

Deno.test("day3 result", () => {
  assertEquals(main(), 230);
});
