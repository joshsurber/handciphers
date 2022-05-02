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
    // alphabetMappings maps plaintext letter to ciphertext letter
    let alphabetMappings = [];
    for (let i = 0; i < 26; i++) {
      let plaintext = this.abc[i],
        ciphertext = alphabet[i];
      // I use upper and lower letters so we can preserve case
      alphabetMappings[plaintext.toLowerCase()] = ciphertext.toLowerCase();
      alphabetMappings[plaintext.toUpperCase()] = ciphertext.toUpperCase();
    }
    return msg
      .map((letter) =>
        // If the letter has a mapping, use it, otherwise return the
        // character as is (digits, punctuation, etc)
        alphabetMappings[letter] ? alphabetMappings[letter] : letter
      )
      .join("");
  }

  decode(msg) {
    return this.encode(msg);
  }
}

export class Caesar extends ShiftCipher {
  // Not an arrow function because it is called by subclasses
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
