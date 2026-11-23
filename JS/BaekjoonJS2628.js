const fs = require("fs");
const [mn, l, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const MN = mn.split(" ").map(Number);
const M = MN[0];
const N = MN[1];
const lines = input.map((line) => line.split(" ").map(Number));
let width = [0, N];
let height = [0, M];

for (let line of lines) {
  if (line[0] == 0) {
    width.push(line[1]);
  } else {
    height.push(line[1]);
  }
}

width = width.sort((a, b) => a - b);
height = height.sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < width.length - 1; i++) {
  for (let j = 0; j < height.length - 1; j++) {
    let x = width[i + 1] - width[i];
    let y = height[j + 1] - height[j];

    answer = Math.max(answer, x * y);
  }
}

console.log(answer);
