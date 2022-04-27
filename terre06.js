//“Inverser une chaîne”
//Usage : node terre06 [ANY]
"use strict";
if (process.argv.length != 3) {
  process.exit();
}
for (let index = process.argv[2].length - 1; index >= 0; index--) {
  process.stdout.write(process.argv[2][index]);
}
