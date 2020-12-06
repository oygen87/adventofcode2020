import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import {
  mapInputToPasswordModel,
  validatePassword,
  validatePasswords,
} from "./day2.ts";

Deno.test("Should map raw input to PasswordModel", () => {
  const input1 = ["1-4 m: mrfmmbjxr", "3-5 b: rqxbb"];

  const result1 = mapInputToPasswordModel(input1);
  const expected1 = [{
    min: 1,
    max: 4,
    char: "m",
    password: "mrfmmbjxr",
  }, {
    min: 3,
    max: 5,
    char: "b",
    password: "rqxbb",
  }];
  assertEquals(result1, expected1);
});

Deno.test("Should validate password", () => {
  const input1 = {
    min: 1,
    max: 4,
    char: "m",
    password: "mrfmmbjxr",
  };

  const result1 = validatePassword(input1);
  assertEquals(result1, true);

  const input2 = {
    min: 3,
    max: 5,
    char: "b",
    password: "rqxbb",
  };
  const result2 = validatePassword(input2);
  assertEquals(result2, false);
});

Deno.test("Should validate password", () => {
  const input = [{
    min: 1,
    max: 4,
    char: "m",
    password: "mrfmmbjxr",
  }, {
    min: 3,
    max: 5,
    char: "b",
    password: "rqxbb",
  }];

  const result = validatePasswords(input);
  assertEquals(result, 1);
});
