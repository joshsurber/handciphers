import { Cipher } from "./cipher.js";

export class ShiftCipher extends Cipher {
  abc = "abcdefghijklmnopqrstuvwxyz";
  constructor() {
    super();
  }

  encode(msg, alphabet) {
    if (alphabet.length != 26)
      throw new Error("Shifted alphabet not 26 letters");
    msg = msg.split("");
    // let abc = "abcdefghijklmnopqrstuvwxyz";
    let swap = [];
    for (let i = 0; i < 26; i++) {
      let input = this.abc[i],
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

export class Caesar extends ShiftCipher {
  encode(msg, offset) {
    return super.encode(
      msg,
      this.abc.substring(offset) + this.abc.substring(0, offset)
    );
  }
  decode = (msg, offset) => this.encode(msg, 26 - offset);
}

export class Rot13 extends Caesar {
  encode = (msg) => super.encode(msg, 13);
  decode = (msg) => super.encode(msg, 13);
}

export class Atbash extends ShiftCipher {
  encode = (msg) => super.encode(msg, "zyxwvutsrqponmlkjihgfedcba");
}
