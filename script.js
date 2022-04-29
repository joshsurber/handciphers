import { Atbash } from "./shiftcipher.js";
var foo = new Atbash();

var f = document.querySelector("form");
f.addEventListener("submit", (e) => {
  e.preventDefault();
  var v = document.querySelector("#txt").value;
  document.querySelector("#txt").value = foo.decode(v);
});
document.querySelector("#txt").focus();
