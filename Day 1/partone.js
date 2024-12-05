import { promises as fs } from "fs";

export const input = await getInput();

async function getInput(){
    return fs.readFile("inputDay1.txt", "utf8");
}

export function splitArray(nrlist) {
  let left = [];
  let right = [];
  let lines = nrlist.trim().split("\n");
  for (let line of lines) {
    let [l, r] = line.trim().split(/\s+/).map(Number);
    left.push(l);
    right.push(r);
  }
  return [left.sort((a, b) => a - b), right.sort((a, b) => a - b)];
}

export function calcSum(left, right) {
  let sumDif = 0;
  for (let i = 0; i < left.length; i++) {
    let dif = Math.abs(left[i] - right[i]);
    sumDif += dif;
  }
  return sumDif;
}

let [left, right] = splitArray(input);
let calcsum = calcSum(left, right);

console.log(calcsum);
