import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { main, mapBinaryStringToNumber, toBinaryString } from "./day5.ts";

Deno.test("Should map input to binary string", () => {
  const input1 = "FBFFFFB";
  const result1 = toBinaryString(input1);
  const expected1 = "0100001";
  assertEquals(result1, expected1);

  const input2 = "FFBBFF";
  const result2 = toBinaryString(input2);
  const expected2 = "001100";
  assertEquals(result2, expected2);

  const input3 = "RLL";
  const result3 = toBinaryString(input3);
  const expected3 = "100";
  assertEquals(result3, expected3);

  const input4 = "LRL";
  const result4 = toBinaryString(input4);
  const expected4 = "010";
  assertEquals(result4, expected4);
});

Deno.test("Should map binary string to number", () => {
  const input1 = "0100001";
  const result1 = mapBinaryStringToNumber(input1);
  const expected1 = 33;
  assertEquals(result1, expected1);

  const input2 = "001100";
  const result2 = mapBinaryStringToNumber(input2);
  const expected2 = 12;
  assertEquals(result2, expected2);

  const input3 = "100";
  const result3 = mapBinaryStringToNumber(input3);
  const expected3 = 4;
  assertEquals(result3, expected3);

  const input4 = "010";
  const result4 = mapBinaryStringToNumber(input4);
  const expected4 = 2;
  assertEquals(result4, expected4);

  const input5 = "1111111";
  const result5 = mapBinaryStringToNumber(input5);
  const expected5 = 127;
  assertEquals(result5, expected5);

  const input6 = "0000000";
  const result6 = mapBinaryStringToNumber(input6);
  const expected6 = 0;
  assertEquals(result6, expected6);
});

Deno.test("day5 result", () => {
  assertEquals(main(), 901);
});
