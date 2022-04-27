//“Taille d’une chaîne”
//Usage : node terre07 [STRING]
"use strict";
if (process.argv.length != 3 || !isNaN(parseFloat(process.argv[2]))) {
  console.log("erreur.");
  process.exit();
}
console.log(process.argv[2].length);
