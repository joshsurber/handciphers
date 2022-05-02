import { Atbash } from "./shiftcipher.js";
var foo = new Atbash();
var offset = 1;

document.getElementById("encode").addEventListener("click", (e) => {
  e.preventDefault();
  var v = document.querySelector("#txt").value;
  document.querySelector("#txt").value = foo.encode(v, 1);
});
document.getElementById("decode").addEventListener("click", (e) => {
  e.preventDefault();
  var v = document.getElementById("txt").value;
  document.getElementById("txt").value = foo.decode(v, 1);
});
document.getElementById("txt").value = "abc";
document.getElementById("txt").focus();
