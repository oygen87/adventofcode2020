import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { groupAnswers, toAnsweredQuestions } from "./day6.ts";

Deno.test("Should group answers into one string separated by empty line", () => {
  const input = [
    "abc",
    "bc",
    "",
    "aaaabb",
    "bbbbccc",
    "ccccdd",
    "eee",
    "ffaaa",
    "aaa",
    "",
    "z",
    "z",
    "z",
    "y",
    "z",
  ];

  const result = groupAnswers(input);
  const expected = ["abcbc", "aaaabbbbbbcccccccddeeeffaaaaaa", "zzzyz"];
  assertEquals(result, expected);
});

Deno.test("Should map answer string to number of uniquely answered questions", () => {
  const input = ["abcbc", "aaaabbbbbbcccccccddeeeffaaaaaa", "zzzyz"];
  const result = input.map(toAnsweredQuestions);
  const expected = [3, 6, 2];
  assertEquals(result, expected);
});
