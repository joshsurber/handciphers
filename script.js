import { Rot13 } from "./shiftcipher.js";
var foo = new Rot13();
var offset = 1;

// var f = document.querySelector("form");
// f.addEventListener("submit", (e) => {
//   e.preventDefault();
//   var v = document.querySelector("#txt").value;
//   document.querySelector("#txt").value = foo.encode(v, 1);
// });
document.getElementById("encode").addEventListener("click", (e) => {
  e.preventDefault();
  var v = document.querySelector("#txt").value;
  document.querySelector("#txt").value = foo.encode(v, offset);
});
document.getElementById("decode").addEventListener("click", (e) => {
  e.preventDefault();
  var v = document.getElementById("txt").value;
  document.getElementById("txt").value = foo.decode(v, offset);
});
document.getElementById("txt").value = "abc";
document.getElementById("txt").focus();
