// “Pair ou impair”
//Usage : node terre04 [NUMBER]
"use strict";
const lolNope = "Tu ne me la mettras pas à l’envers.";
if (process.argv.length != 3) {
  console.log(lolNope);
  process.exit();
}
const parsed = parseInt(process.argv[2], 10);
if (isNaN(parsed) || parsed.toString() != process.argv[2]) {
  console.log(lolNope);
} else console.log(parsed % 2 == 0 ? "pair" : "impair");
