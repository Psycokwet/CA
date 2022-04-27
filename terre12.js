//“12 to 24”
//Usage : node terre12 [HOUR-12]
"use strict";
if (process.argv.length != 3) {
  console.log("The number of arg is incorrect");
  process.exit();
}
let pm = process.argv[2].endsWith("PM");
let am = process.argv[2].endsWith("AM");
if (!pm && !am) {
  console.log("The time format is incorrect");
  process.exit();
}

const units = process.argv[2].slice(0, -2).split(":");
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
if (!isBetween(hours, 0, 12) || !isBetween(minutes, 0, 60)) {
  console.log("The time format is illegal");
  process.exit();
}
if (pm) console.log(hours + 12 + ":" + minutes);
else console.log(hours + ":" + minutes);
