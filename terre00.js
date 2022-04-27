//“L’alphabet”
//Usage : node terre00
"use strict";
var len = "z".charCodeAt(0) - "a".charCodeAt(0);
for (let i = 0; i <= len; i++) {
  process.stdout.write(String.fromCharCode("a".charCodeAt(0) + i));
}
