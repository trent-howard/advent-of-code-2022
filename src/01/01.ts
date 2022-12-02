import { readFile } from "./utils";

const solve = async () => {
  const lineReader = readFile(`${__dirname}/input.txt`);
  let total = 0;
  const totals = [];
  for await (const line of lineReader) {
    if (line) {
      total += Number(line);
    } else {
      totals.push(total);
      total = 0;
    }
  }

  const orderedTotals = totals.sort((a, b) => b - a);

  const [solutionOne] = orderedTotals;
  const solutionTwo = orderedTotals
    .slice(0, 3)
    .reduce((total, num) => total + num, 0);
  console.log({ solutionOne, solutionTwo });
};

(async () => {
  await solve();
})();
