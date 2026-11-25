const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const classes = input
  .slice(1, n + 1)
  .map((line) => line.trim().split(" ").map(Number));

let maxCount = -1;
let leader = 1;

for (let i = 0; i < n; i++) {
  let count = 0;

  for (let j = 0; j < n; j++) {
    if (i === j) continue;

    for (let g = 0; g < 5; g++) {
      if (classes[i][g] === classes[j][g]) {
        count++;
        break;
      }
    }
  }

  if (count > maxCount) {
    maxCount = count;
    leader = i + 1;
  }
}

console.log(leader);
