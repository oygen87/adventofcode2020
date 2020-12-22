import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export const mapInputToPassports = (input: string[]): string[] => {
  const indexOfLastRow = input.length - 1;

  const formattedPassports: string[] = [];
  let currentPassport = "";

  input.forEach((row, i) => {
    if (row.length !== 0) {
      currentPassport += " " + row;
      if (i === indexOfLastRow) {
        formattedPassports.push(currentPassport.trim());
      }
    } else {
      formattedPassports.push(currentPassport.trim());
      currentPassport = "";
    }
  });

  return formattedPassports;
};

export const validatePassports = (passports: string[]): number => {
  let numberOfValidPassports = 0;

  passports.forEach((passport) => {
    const isValid = validatePassport(passport);
    if (isValid) {
      numberOfValidPassports++;
    }
  });

  return numberOfValidPassports;
};

export const validatePassport = (passport: string): boolean => {
  if (!passport.includes("byr:")) {
    return false;
  }
  if (!passport.includes("iyr:")) {
    return false;
  }
  if (!passport.includes("eyr:")) {
    return false;
  }
  if (!passport.includes("hgt:")) {
    return false;
  }
  if (!passport.includes("hcl:")) {
    return false;
  }
  if (!passport.includes("ecl:")) {
    return false;
  }
  if (!passport.includes("pid:")) {
    return false;
  }
  return true;
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split(/\r?\n/);

  const passports = mapInputToPassports(input);

  const numberOfValidPassports = validatePassports(passports);

  console.log(numberOfValidPassports);

  return numberOfValidPassports;
};
