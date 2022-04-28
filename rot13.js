import { Cipher } from "./cipher.js";
export class Rot13 extends Cipher {
  constructor() {
    super();
  }

  encode(msg) {
    msg = msg.split("");
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let nop = "nopqrstuvwxyzabcdefghijklm";
    let swap = [];
    for (let i = 0; i < 25; i++) {
      let input = abc[i],
        output = nop[i];
      swap[input] = output;
      swap[input.toUpperCase()] = output.toUpperCase();
    }
    return msg.map((letter) => (swap[letter] ? swap[letter] : letter)).join("");
  }

  decode(msg) {
    return this.encode(msg);
  }
}
