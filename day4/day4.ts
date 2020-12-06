const mapInputToPassports = (input: string[]): string[] => {
  const indexOfLastRow = input.length - 1;

  const formattedPassports: string[] = [];
  let currentPassport = "";

  input.forEach((row, i) => {
    if (row.length !== 0) {
      currentPassport += " " + row;
      if (i === indexOfLastRow) {
        formattedPassports.push(currentPassport);
      }
    } else {
      formattedPassports.push(currentPassport);
      currentPassport = "";
    }
  });

  return formattedPassports;
};

const validatePassports = (passports: string[]): number => {
  let numberOfValidPassports = 0;

  passports.forEach((passport) => {
    const isValid = validatePassport(passport);
    if (isValid) {
      numberOfValidPassports++;
    }
  });

  return numberOfValidPassports;
};

const validatePassport = (passport: string): boolean => {
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
  const input: string[] = Deno.readTextFileSync("./input.txt").split("\r\n");

  const passports = mapInputToPassports(input);

  const numberOfValidPassports = validatePassports(passports);

  console.log(numberOfValidPassports);
};

main();
