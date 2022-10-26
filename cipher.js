export class Cipher {
  abc = "abcdefghijklmnopqrstuvwxyz";
  constructor(setup = {}) {
    return this;
  }
  encode(msg = "", key = null, options = {}) {
    return;
  }
  decode(msg = "", key = null, options = {}) {
    return;
  }
  prepare(text) {
    return text.toUpperCase().replaceAll(/[^A-Z]/g, "");
  }
  derangedAlphabet(key, removedLetter) {
    // use the key to create a deranged alphabet
    key += this.abc;
    if (removedLetter) key = key.replaceAll(removedLetter, "");
    return [...new Set(key)];
  }
}
