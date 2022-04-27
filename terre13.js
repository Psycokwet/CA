//“Trouver la Suisse (lol)”
//Usage : node terre13 1*[NOMBRE]
"use strict";
if (process.argv.length < 3) {
  console.log("There is not enough args");
  process.exit();
}

let allValues = [];
function getNumber(arg) {
  let tmp = parseInt(arg, 10);
  if (isNaN(tmp) || tmp.toString() != arg) {
    console.log(arg + " is not valid as a number in this situation");
    process.exit();
  }
  return tmp;
}
for (let index = 0; index < process.argv.length - 2; index++) {
  allValues[index] = getNumber(process.argv[2 + index]);
}
allValues.sort();
let checkSet = new Set(allValues);
if (checkSet.size != allValues.length) {
  console.log("There is duplicates values, error");
  process.exit();
}

console.log(allValues[Math.floor(allValues.length / 2)]);
