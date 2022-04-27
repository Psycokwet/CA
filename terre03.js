//“L’alphabet à partir de”
//Usage : node terre03 [LOWCASE_LETTER]
"use strict";
if (process.argv.length < 3) process.exit();
var letter = process.argv[2];
var len = "z".charCodeAt(0) - letter.charCodeAt(0);
for (let index = 0; index <= len; index++) {
  process.stdout.write(String.fromCharCode(letter.charCodeAt(0) + index));
}
