import { readFileSync } from "fs";

const input = readFileSync(`${__dirname}/input.txt`, "utf-8").split("\n");

type Elf = {
  start: number;
  end: number;
};

const pairs = input.map((pair) =>
  pair.split(",").reduce((acc: Elf[], elf: string) => {
    const [start, end] = elf.split("-");
    return [
      ...acc,
      {
        start: Number(start),
        end: Number(end),
      },
    ];
  }, [])
) as [[Elf, Elf]];

const isTotalOverlap = ([first, second]: [Elf, Elf]) =>
  (first.start <= second.start && first.end >= second.end) ||
  (second.start <= first.start && second.end >= first.end);

const isOverlap = ([first, second]: [Elf, Elf]) =>
  (first.start <= second.start && first.end >= second.start) ||
  (second.start <= first.start && second.end >= first.start);

const partOne = pairs.map(isTotalOverlap).filter(Boolean).length;
const partTwo = pairs.map(isOverlap).filter(Boolean).length;

console.log({ partOne, partTwo });
