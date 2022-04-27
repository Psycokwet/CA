//“Afficheur d’arguments”
//Usage : node terre02 *[ANY]
"use strict";
for (let index = 2; index < process.argv.length; index++) {
  console.log(process.argv[index]);
}
