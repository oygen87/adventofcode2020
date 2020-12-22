import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export const toBinaryString = (s: string) => {
  let binaryString = s.replaceAll("B", "1");
  binaryString = binaryString.replaceAll("F", "0");
  binaryString = binaryString.replaceAll("R", "1");
  binaryString = binaryString.replaceAll("L", "0");
  return binaryString;
};

export const mapBinaryStringToNumber = (row: string) => {
  let total = 0;

  row.split("").reverse().forEach((binary, index) => {
    if (index === 0) {
      if (binary === "1") {
        total++;
      }
    } else {
      if (binary === "1") {
        total = total + (Math.pow(2, index));
      }
    }
  });

  return total;
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split(/\r?\n/);

  const data = input.map(toBinaryString);

  let max = 0;

  data.forEach((el) => {
    const row = el.substring(0, 7);
    const col = el.substring(7, 10);

    const rowNumber: number = mapBinaryStringToNumber(row);
    const colNumber: number = mapBinaryStringToNumber(col);

    const seatId = (rowNumber * 8) + colNumber;

    if (seatId > max) {
      max = seatId;
    }
  });

  console.log(max);

  return max;
};
