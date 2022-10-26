import { Cipher } from "./cipher.js";
export class Playfair extends Cipher {
  constructor() {
    super();
  }
  encode(msg, key) {
    let square = this.makeSquare(key);
    console.table(square); //FIXME
    let result = "";
    msg = this.prepare(msg);
    // create variable bigraph, a two-char array
    // loop through the message
    // if both characters are the same put one back in the message
    // and replace it with an x
    // get lookup info from each letter, swap the rows/cols around
    // lookup the letters from the swap, add to result
    // end loop
    // return result
    return result;
  }
  decode(msg, key) {
    let square = this.makeSquare(key);
    return msg;
  }
  makeSquare(key) {
    key = this.derangedAlphabet(key, "j").map((x) => x.toUpperCase(x));
    // square[1][2] maps to a letter
    // square[letter] maps to [1,2]
    let square = [];
    for (let i = 0; i < 5; i++) {
      square[i] = [];
      for (let j = 0; j < 5; j++) {
        let letter = key[5 * i + j];
        square[i][j] = letter;
        square[letter] = [i, j];
      }
    }
    return square;
  }
}
export class TwoSquare extends Playfair {
  constructor() {
    super();
  }
}
export class FourSquare extends Playfair {
  constructor() {
    super();
  }
}
