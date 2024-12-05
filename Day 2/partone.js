import { promises as fs } from "fs";

export const input = await getInput();

async function getInput() {
    return (await fs.readFile("inputDay2.txt", "utf8")).trim().split("\n"); 
}


function increaseOrDecrease(data) {
    const levels = data.trim().split(/\s+/).map(Number); 

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

let safeCount = 0;

for (const line of input) {
    if (line.trim() === "") continue;
    if (increaseOrDecrease(line.trim())) {
        safeCount++;
    }
}

console.log(`${safeCount}`);
