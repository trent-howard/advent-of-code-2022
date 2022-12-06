import { readFileSync } from "fs";

const input = readFileSync(`${__dirname}/input.txt`, "utf-8").split("\n");

const getCharCode = (char: string) => {
  const codePoint = char.charCodeAt(0);
  const modifier = codePoint >= 97 ? 96 : 38;
  return codePoint - modifier;
};

const partOne = input.reduce((total, items) => {
  const middle = Math.floor(items.length / 2);

  const first = items.slice(0, middle);
  const second = items.slice(middle);

  let priority = 0;
  [...first].some((char) => {
    if (second.includes(char)) {
      priority = getCharCode(char);
      return true;
    }
  });

  return (total += priority);
}, 0);

// part two
const badges: number[] = [];
for (let start = 0; start < input.length; start += 3) {
  const [one, two, three] = input.slice(start, start + 3);

  [...one]
    .map((char) => {
      if (two.includes(char)) {
        return char;
      }
    })
    .filter(Boolean)
    .some((char) => {
      if (three.includes(char as string)) {
        badges.push(getCharCode(char as string));
        return true;
      }
    });
}

const partTwo = badges.reduce((total, badge) => total + badge, 0);

console.log({ partOne, partTwo });
