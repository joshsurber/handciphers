import { Cipher } from "./cipher.js";
import { Rot13 } from "./rot13.js";
var foo = new Rot13();
var bar = foo.encode("josh");
console.log(bar, foo.decode(bar));

var f = document.querySelector("form");
f.addEventListener("submit", (e) => {
  e.preventDefault();
  var v = document.querySelector("#txt").value;
  document.querySelector("#txt").value = foo.encode(v);
  console.log(v);
});
document.querySelector("#txt").focus();
