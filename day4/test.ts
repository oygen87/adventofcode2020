import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import {
  mapInputToPassports,
  validatePassport,
  validatePassports,
} from "./day4.ts";

Deno.test("Should map raw input to passwords (group and split by newline)", () => {
  const input = [
    "byr:1971",
    "eyr:2039",
    "hgt:172in pid:170cm hcl:17106b iyr:2012 ecl:gry",
    "cid:339",
    "",
    "hgt:161cm eyr:2027",
    "ecl:grn iyr:2011 hcl:#a97842 byr:1977 pid:910468396",
    "",
    "cid:257",
    "ecl:gry hgt:186cm iyr:2012",
    "byr:1941",
    "eyr:2029",
    "pid:108935675",
    "hcl:#cfa07d;",
  ];

  const result = mapInputToPassports(input);
  const expected = [
    "byr:1971 eyr:2039 hgt:172in pid:170cm hcl:17106b iyr:2012 ecl:gry cid:339",
    "hgt:161cm eyr:2027 ecl:grn iyr:2011 hcl:#a97842 byr:1977 pid:910468396",
    "cid:257 ecl:gry hgt:186cm iyr:2012 byr:1941 eyr:2029 pid:108935675 hcl:#cfa07d;",
  ];

  assertEquals(result, expected);
});

Deno.test("should validate passport", () => {
  // all 8 fields
  const input1 =
    "byr:1971 eyr:2039 hgt:172in pid:170cm hcl:17106b iyr:2012 ecl:gry cid:339";
  const result1 = validatePassport(input1);
  assertEquals(result1, true);

  // without optional cid
  const input2 =
    "hgt:161cm eyr:2027 ecl:grn iyr:2011 hcl:#a97842 byr:1977 pid:910468396";
  const result2 = validatePassport(input2);
  assertEquals(result2, true);

  // too few fields
  const input3 = "ecl:grt iyr:2022 hcl:z hgt:192cm byr:2010";
  const result3 = validatePassport(input3);
  assertEquals(result3, false);
});

Deno.test("should validate passports", () => {
  const input = [
    "byr:1971 eyr:2039 hgt:172in pid:170cm hcl:17106b iyr:2012 ecl:gry cid:339",
    "hgt:161cm eyr:2027 ecl:grn iyr:2011 hcl:#a97842 byr:1977 pid:910468396",
    "ecl:grt iyr:2022 hcl:z hgt:192cm byr:2010",
  ];

  const result = validatePassports(input);
  assertEquals(result, 2);
});
