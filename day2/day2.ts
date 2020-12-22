import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export interface PasswordModel {
  min: number;
  max: number;
  char: string;
  password: string;
}

export const mapInputToPasswordModel = (row: string[]): PasswordModel[] => {
  return row.map((r) => {
    const [rule, password] = r.split(":");
    const [minAndMax, char] = rule.split(" ");
    const [min, max] = minAndMax.split("-");

    return { min: +min, max: +max, char, password: password.trim() };
  });
};

export const validatePassword = (passwordModel: PasswordModel): boolean => {
  let occurancesOfChar = 0;

  const chars = passwordModel.password.split("");
  chars.forEach((c) => {
    if (c === passwordModel.char) {
      occurancesOfChar++;
    }
  });

  return occurancesOfChar >= passwordModel.min &&
    occurancesOfChar <= passwordModel.max;
};

export const validatePasswords = (passwords: PasswordModel[]): number => {
  let correctPasswords = 0;

  passwords.forEach((p: PasswordModel) => {
    if (validatePassword(p)) {
      correctPasswords++;
    }
  });

  return correctPasswords;
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split(/\r?\n/);

  const passwords: PasswordModel[] = mapInputToPasswordModel(input);

  const correctPasswords: number = validatePasswords(passwords);

  console.log(correctPasswords);

  return correctPasswords;
};
