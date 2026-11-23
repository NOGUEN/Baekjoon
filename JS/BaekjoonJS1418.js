const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const K = Number(input[1]);

const maxPrime = new Int32Array(N + 1);

for (let i = 2; i <= N; i++) {
  if (maxPrime[i] === 0) {
    for (let j = i; j <= N; j += i) {
      maxPrime[j] = i;
    }
  }
}

let answer = 0;
for (let x = 1; x <= N; x++) {
  if (maxPrime[x] <= K) {
    answer++;
  }
}

console.log(answer);
