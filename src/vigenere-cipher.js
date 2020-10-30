const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(dirOrRev) {
    if (dirOrRev === false) {
      this.dirOrRev = false;
    } else {
      this.dirOrRev = true;
    }
  }

  encrypt(str, key) {
    str = str.toUpperCase().split("");
    key = key.toUpperCase().split("");
    const en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let encryptMessage = [];
    let keyChar = 0;

    for (let i = 0; i < str.length; i++) {
      let M = en.indexOf(str[i]);
      let K = en.indexOf(key[keyChar % key.length]);
      let C = (M + K) % en.length;
      if (M >= 0) {
        encryptMessage.push(en[C]);
        keyChar += 1;
      } else {
        encryptMessage.push(str[i]);
      }
    }
    if (this.dirOrRev) {
      encryptMessage = encryptMessage.join("");
      return encryptMessage;
    } else {
      encryptMessage = encryptMessage.reverse().join("");
      return encryptMessage;
    }
  }

  decrypt(str, key) {
    str = str.toUpperCase().split("");
    key = key.toUpperCase().split("");
    const en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let decryptMessage = [];
    let keyChar = 0;

    for (let i = 0; i < str.length; i++) {
      let C = en.indexOf(str[i]);
      let K = en.indexOf(key[keyChar % key.length]);
      let M = (C - K) % en.length;
      if (C >= 0) {
        if (M >= 0) {
          decryptMessage.push(en[M]);
          keyChar += 1;
        } else {
          decryptMessage.push(en[M + en.length]);
          keyChar += 1;
        }
      } else {
        decryptMessage.push(str[i]);
      }
    }
    if (this.dirOrRev) {
      decryptMessage = decryptMessage.join("");
      return(decryptMessage);
    } else {
      decryptMessage = decryptMessage.reverse().join("");
      return(decryptMessage);
    }
  }
}

module.exports = VigenereCipheringMachine;
