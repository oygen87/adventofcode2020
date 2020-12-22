import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

export const SeatType = {
  EMPTY: "L" as Empty,
  OCCUPIED: "#" as Occupied,
  FLOOR: "." as Floor,
};

export type Empty = "L";
export type Occupied = "#";
export type Floor = ".";

export type Seat = Empty | Occupied | Floor;
export type Table = Seat[][];

export const getAdjacent = (row: number, col: number, table: Table): Seat[] => {
  const seats = [] as Seat[];

  if ((row - 1 >= 0 && col - 1 >= 0) && table[row - 1][col - 1]) {
    seats.push(table[row - 1][col - 1]);
  }
  if ((row - 1 >= 0) && table[row - 1][col]) {
    seats.push(table[row - 1][col]);
  }
  if ((row - 1 >= 0) && table[row - 1][col + 1]) {
    seats.push(table[row - 1][col + 1]);
  }
  if ((col - 1 >= 0) && table[row][col - 1]) {
    seats.push(table[row][col - 1]);
  }
  if (table[row][col + 1]) {
    seats.push(table[row][col + 1]);
  }
  if ((col - 1 >= 0) && table[row + 1] && table[row + 1][col - 1]) {
    seats.push(table[row + 1][col - 1]);
  }
  if (table[row + 1] && table[row + 1][col]) {
    seats.push(table[row + 1][col]);
  }
  if (table[row + 1] && table[row + 1][col + 1]) {
    seats.push(table[row + 1][col + 1]);
  }

  return seats;
};

export const seatIsEmpty = (seat: Seat): boolean => {
  return seat === "L";
};

export const seatIsOccupied = (seat: Seat): boolean => {
  return seat === "#";
};

export const hasAtLeast = (
  n: number,
  seatType: Seat,
  seats: Seat[],
) => {
  return seats.filter((s) => s === seatType).length >= n;
};

export const hasExact = (
  n: number,
  seatType: Seat,
  seats: Seat[],
) => {
  return seats.filter((s) => s === seatType).length === n;
};

export const copyTable = (table: Table): Table => {
  return JSON.parse(JSON.stringify(table));
};

export const countSeatTypeInTable = (seatType: Seat, table: Table): number => {
  let count = 0;

  table.forEach((row) => {
    row.forEach((col) => {
      if (col === seatType) {
        count++;
      }
    });
  });

  return count;
};

export const main = () => {
  const input: string[] = Deno.readTextFileSync(
    path.fromFileUrl(new URL("input.txt", import.meta.url)),
  ).split(/\r?\n/);

  let table = input.map((el) => el.split("")) as Table;

  let hasChanged = true;

  let tableForNextCycle: Table = copyTable(table);

  while (hasChanged) {
    hasChanged = false;
    tableForNextCycle = copyTable(table);

    table.forEach((row, rowIndex) => {
      row.forEach((seat, colIndex) => {
        const adjacentSeats = getAdjacent(rowIndex, colIndex, table);

        if (seatIsEmpty(seat)) {
          if (
            hasExact(
              0,
              SeatType.OCCUPIED,
              adjacentSeats,
            )
          ) {
            tableForNextCycle[rowIndex][colIndex] = SeatType.OCCUPIED;
            hasChanged = true;
          }
        }

        if (seatIsOccupied(seat)) {
          if (
            hasAtLeast(
              4,
              SeatType.OCCUPIED,
              adjacentSeats,
            )
          ) {
            tableForNextCycle[rowIndex][colIndex] = SeatType.EMPTY;
            hasChanged = true;
          }
        }
      });
    });

    if (hasChanged) {
      table = tableForNextCycle;
    }
  }

  const result = countSeatTypeInTable(SeatType.OCCUPIED, table);

  console.log(result);

  return result;
};
