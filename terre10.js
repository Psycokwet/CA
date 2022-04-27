//“Nombre premier”
//Usage : node terre10 [NUMBER]
"use strict";
const lolNope = "erreur";
const notAPrime = (value) => `Non, ${value} n’est pas un nombre premier.`;
const isAPrime = (value) => `Oui, ${value} est un nombre premier.`;
if (process.argv.length != 3) {
  console.log(lolNope);
  process.exit();
}
const parsed1 = parseInt(process.argv[2], 10);
if (isNaN(parsed1) || parsed1.toString() != process.argv[2]) {
  console.log(lolNope);
  process.exit();
}
if (parsed1 === 0 || parsed1 === 1) {
  console.log(notAPrime(parsed1));
  process.exit();
}
if (parsed1 < 0) parsed1 = -parsed1;
var divider = null;
for (let index = 0; index < parsed1; index++) {
  if (divider != null && parsed1 % index === 0) {
    console.log(notAPrime(parsed1));
    process.exit();
  }
  if (divider === null && parsed1 % index === 0) divider = index;
}

console.log(isAPrime(parsed1));
