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
  multiply:function(n1,n2){
    return n1*n2
  }
};

export { capitalize, reverse, calculator };
