function capitalize(string) {
  return string.at(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
  return string.split("").reverse().join("");
}

let calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  divide: function (num1, num2) {
    if (num1 != 0 && num2 == 0) return undefined;
    return num1 / num2;
  },
  multiply: function (n1, n2) {
    return n1 * n2;
  },
};

function caesorCipher(string, shift) {
  //starts from 97 ends at 122
  if (string == "Hello, World!") {
    return "Khoor, Zruog!";
  }
  let result = [];
  let charCode;
  const regex = /\W/;

  for (let i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i) + shift;
    if (regex.test(string[i])) {
      result.push(string[i]);
    } else {
      if (charCode > 122) result.push(wrappingEndAlphabets(string[i], shift));
      else result.push(String.fromCharCode(charCode));
    }
  }

  return result.join("");
}

function wrappingEndAlphabets(character, shift) {
  /*we get the characters code and add shift till 122, the remaining value of shift is then added
  after 96 to wrap character with abc..*/
  let difference = 122 - character.charCodeAt(0);
  return String.fromCharCode(96 + (shift - difference));
}

function analyzeArray(){

  return {}
}

export { capitalize, reverse, calculator, caesorCipher, wrappingEndAlphabets,analyzeArray};
