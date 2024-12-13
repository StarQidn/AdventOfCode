import { promises as fs } from "fs";

export const input = await getInput();

async function getInput() {
  return (await fs.readFile("inputDay2.txt", "utf8")).trim().split("\n");
}

function increaseOrDecrease(levels) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (diff > 0) decreasing = false;
    if (diff < 0) increasing = false;
  }

  const safe = increasing || decreasing;
  return safe;
}

function removeItemOnce(arr, index) {
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

let safeCount = 0;

for (const line of input) {
  const levels = line.trim().split(/\s+/).map(Number);

  if (levels === "") continue;
  if (increaseOrDecrease(levels)) {
    safeCount++;
  } else {
    for (let i = 0; i < levels.length; i++) {
      let copiedLine = [...levels];
      removeItemOnce(copiedLine, i);

      if (increaseOrDecrease(copiedLine)) {
        safeCount++;
        break;
      }
    }
  }
}

console.log(`${safeCount}`);
