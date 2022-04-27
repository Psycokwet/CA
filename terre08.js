//“Puissance d’un nombre”
//Usage : node terre08 [NUMBER] [+NUMBER]
"use strict";
const lolNope = "erreur";
if (process.argv.length < 4) {
  console.log(lolNope);
  process.exit();
}
const parsed1 = parseInt(process.argv[2], 10);
const parsed2 = parseInt(process.argv[3], 10);
if (
  isNaN(parsed1) ||
  isNaN(parsed2) ||
  parsed2 < 0 ||
  parsed1.toString() != process.argv[2] ||
  parsed2.toString() != process.argv[3]
) {
  console.log(lolNope);
} else {
  console.log(Math.pow(parsed1, parsed2));
}
