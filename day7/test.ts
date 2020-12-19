import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import {
  findAllDirectParentsForColor,
  main,
  removeParentFromList,
} from "./day7.ts";

Deno.test("Should remove parent color from list", () => {
  const input = [
    "shiny gold bags contain 5 drab red bags, 2 mirrored green bags, 2 muted tomato bags, 1 striped magenta bag.",
    "wavy bronze bags contain 2 vibrant green bags, 2 plaid orange bags, 2 vibrant orange bags.",
    "dark tomato bags contain 4 posh indigo bags.",
  ];
  const result = removeParentFromList("shiny gold", input);
  const expected = [
    "wavy bronze bags contain 2 vibrant green bags, 2 plaid orange bags, 2 vibrant orange bags.",
    "dark tomato bags contain 4 posh indigo bags.",
  ];
  assertEquals(result, expected);
});

Deno.test("Should find all direct parents for colors", () => {
  const input = [
    "striped orange bags contain 5 striped gold bags, 5 pale white bags, 5 mirrored lavender bags.",
    "bright tomato bags contain 5 muted white bags.",
    "shiny silver bags contain 1 dotted orange bag, 2 light olive bags, 1 striped gold bag.",
  ];

  const result = findAllDirectParentsForColor("striped gold", input);
  const expected = ["striped orange", "shiny silver"];
  assertEquals(result, expected);
});

Deno.test("day7 result", () => {
  assertEquals(main(), 224);
});
