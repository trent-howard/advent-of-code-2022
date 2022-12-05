import { readFile } from "/src/utils";

const shapePoints = { r: 1, p: 2, s: 3 };
const outcomes = { w: 6, d: 3, l: 0 };

const solveOne = async () => {
  const lineReader = readFile(`${__dirname}/input.txt`);

  // part 1
  const outcomeMap = {
    a: {
      x: outcomes.d + shapePoints.r,
      y: outcomes.w + shapePoints.p,
      z: outcomes.l + shapePoints.s,
    },
    b: {
      x: outcomes.l + shapePoints.r,
      y: outcomes.d + shapePoints.p,
      z: outcomes.w + shapePoints.s,
    },
    c: {
      x: outcomes.w + shapePoints.r,
      y: outcomes.l + shapePoints.p,
      z: outcomes.d + shapePoints.s,
    },
  } as any;

  let partOne = 0;
  for await (const round of lineReader) {
    const [them, me] = round.toLowerCase().split(" ");
    partOne += outcomeMap[them][me];
  }

  return partOne;
};

const solveTwo = async () => {
  const lineReader = readFile(`${__dirname}/input.txt`);
  const outcomeMap2 = {
    a: {
      x: outcomes.l + shapePoints.r,
      y: outcomes.d + shapePoints.p,
      z: outcomes.w + shapePoints.s,
    },
    b: {
      x: outcomes.l + shapePoints.r,
      y: outcomes.d + shapePoints.p,
      z: outcomes.w + shapePoints.s,
    },
    c: {
      x: outcomes.l + shapePoints.r,
      y: outcomes.d + shapePoints.p,
      z: outcomes.w + shapePoints.s,
    },
  } as any;

  let partTwo = 0;
  for await (const round of lineReader) {
    const [them, me] = round.toLowerCase().split(" ");
    partTwo += outcomeMap2[them][me];
  }

  return partTwo;
};

(async () => {
  const partOne = await solveOne();
  const partTwo = await solveTwo();
  console.log({ partOne, partTwo });
})();
