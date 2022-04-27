//“Trié ou pas”
//Usage : node terre14 1*[NOMBRE]
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
allValues[0] = getNumber(process.argv[2 + 0]);
for (let index = 1; index < process.argv.length - 2; index++) {
  allValues[index] = getNumber(process.argv[2 + index]);
  if (allValues[index - 1] > allValues[index]) {
    console.log("Pas triée !");
    process.exit();
  }
}
console.log("Triée !");
