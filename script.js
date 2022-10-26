import { Playfair } from "./playfair.js";
var foo = new Playfair("josh");
var key = "josh";

document.getElementById("encode").addEventListener("click", (e) => {
  e.preventDefault();
  var v = document.querySelector("#txt").value;
  document.querySelector("#txt").value = foo.encode(v, key);
});
document.getElementById("decode").addEventListener("click", (e) => {
  e.preventDefault();
  var v = document.getElementById("txt").value;
  document.getElementById("txt").value = foo.decode(v, key);
});
document.getElementById("txt").value = "abc";
document.getElementById("txt").focus();
