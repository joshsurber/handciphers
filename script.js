import { Rot13 } from "./rot13.js";
var foo = new Rot13();

var f = document.querySelector("form");
f.addEventListener("submit", (e) => {
  e.preventDefault();
  var v = document.querySelector("#txt").value;
  document.querySelector("#txt").value = foo.encode(v);
});
document.querySelector("#txt").focus();
