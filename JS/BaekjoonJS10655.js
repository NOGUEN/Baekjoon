const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(n);
const pairs = input.map((line) => line.split(" ").map(Number));
var answer = 0;
let index = 1;
let maxV = 0;

for (let i = 1; i < N - 1; i++) {
  const f =
    Math.abs(pairs[i - 1][0] - pairs[i][0]) +
    Math.abs(pairs[i - 1][1] - pairs[i][1]);
  const b =
    Math.abs(pairs[i + 1][0] - pairs[i][0]) +
    Math.abs(pairs[i + 1][1] - pairs[i][1]);
  const s =
    Math.abs(pairs[i + 1][0] - pairs[i - 1][0]) +
    Math.abs(pairs[i + 1][1] - pairs[i - 1][1]);

  if (f + b - s > maxV) {
    index = i;
    maxV = f + b - s;
  }
}

for (let i = 0; i < N - 1; i++) {
  if (i + 1 == index) {
    answer +=
      Math.abs(pairs[i + 2][0] - pairs[i][0]) +
      Math.abs(pairs[i + 2][1] - pairs[i][1]);
    i += 1;
  } else {
    answer +=
      Math.abs(pairs[i + 1][0] - pairs[i][0]) +
      Math.abs(pairs[i + 1][1] - pairs[i][1]);
  }
}

console.log(answer);
