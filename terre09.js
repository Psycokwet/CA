//“Racine carrée d’un nombre”
//Usage : node terre09 [+NUMBER]
"use strict";
const lolNope = "erreur";
if (process.argv.length != 3) {
  console.log(lolNope);
  process.exit();
}
const parsed1 = parseInt(process.argv[2], 10);
if (isNaN(parsed1) || parsed1 < 0 || parsed1.toString() != process.argv[2]) {
  console.log(lolNope);
} else {
  console.log(Math.sqrt(parsed1));
}
