import { Cipher } from "./cipher.js";

export class ShiftCipher extends Cipher {
  constructor() {
    super();
  }

  encode(msg, alphabet) {
    if (alphabet.length != 26)
      throw new Error("Shifted alphabet not 26 letters");
    msg = msg.split("");
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let swap = [];
    for (let i = 0; i < 25; i++) {
      let input = abc[i],
        output = alphabet[i];
      swap[input.toLowerCase()] = output.toLowerCase();
      swap[input.toUpperCase()] = output.toUpperCase();
    }
    return msg.map((letter) => (swap[letter] ? swap[letter] : letter)).join("");
  }

  decode(msg) {
    return this.encode(msg);
  }
}

export class Rot13 extends ShiftCipher {
  encode(msg) {
    return super.encode(msg, "nopqrstuvwxyzabcdefghijklm");
  }
}

export class Atbash extends ShiftCipher {
  encode(msg) {
    return super.encode(msg, "zyxwvutsrqponmlkjihgfedcba");
  }
}
