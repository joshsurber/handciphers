import { Cipher } from "./cipher.js";
export class Rot13 extends Cipher {
  constructor() {
    super();
  }

  encode([...msg]) {
    var abc = this.abc;
    return msg
      .map((x) => abc.charAt((abc.indexOf(x.toUpperCase()) + 13) % 26))
      .join("");
  }

  decode(msg) {
    return this.encode(msg);
  }
}
