//“24 to 12”
//Usage : node terre11 [HOUR-24]
"use strict";
if (process.argv.length != 3) {
  console.log("The number of arg is incorrect");
  process.exit();
}

const units = process.argv[2].split(":");
if (units.length != 2) {
  console.log("The structure of the str is incorrect");
  process.exit();
}

function getNumber(arg) {
  let tmp = parseInt(arg, 10);
  if (isNaN(tmp) || tmp.toString() != arg) {
    console.log(arg + " is not valid as a number in this situation");
    process.exit();
  }
  return tmp;
}
let isBetween = (value, min, max) => value >= min && value < max;

const hours = getNumber(units[0]);
const minutes = getNumber(units[1]);
if (!isBetween(hours, 0, 24) || !isBetween(minutes, 0, 60)) {
  console.log("The time format is illegal");
  process.exit();
}
if (hours > 13) console.log(hours - 12 + ":" + minutes + "PM");
else console.log(hours + ":" + minutes);
