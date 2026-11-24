const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const lines = input.map((line) => line.split(" "));

for (let line of lines) {
  if (line[0] === "#") {
    break;
  }
  if (Number(line[1]) > 17 || Number(line[2] >= 80)) {
    console.log(line[0] + " " + "Senior");
  } else {
    console.log(line[0] + " " + "Junior");
  }
}
