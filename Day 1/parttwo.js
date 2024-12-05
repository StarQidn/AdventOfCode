import { promises as fs } from "fs";
import { splitArray, calcSum, input } from "./partone.js";

const [left, right] = splitArray(input);

let iets = 0;

for(const nr of left) {
    const frequency = right.filter(x => x === nr).length;
    iets += frequency * nr;
}

console.log(iets);