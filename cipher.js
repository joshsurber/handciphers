export class Cipher {
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
    return text.toUpperCase();
  }
}
