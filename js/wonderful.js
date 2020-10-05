// Wonderful.js by Bruno Zhong
class Wonderful {
  constructor() {
    this.run = (elem, key, val) => {
      elem.style.setProperty(key, val);
    }
  }
  style(elem, key, value) {
    this.run(elem, key, value);
  }
}
