const elDisplay = document.querySelector(".display");
const elSum = document.querySelector(".sum");

let operator = ["+", "*", "-", "/", "%"];

const check = function (num) {
  if (elDisplay.value == "0") {
    elDisplay.value = num;
  } else {
    elDisplay.value += num;
  }
};

const checkminus = function (num1) {
  let value = elDisplay.value.split("");
  if (!(value[value.length - 1] == "-")) {
    elDisplay.value *= -1;
  } else {
    elDisplay.value;
  }
};

const checkminuss = function (num1) {
  let value = elDisplay.value.split("");
  if (!(value[value.length - 1] == "-")) {
    elDisplay.value += num1;
  } else {
    elDisplay.value;
  }
};

const checkmultip = function (multip) {
  let value = elDisplay.value.split("");
  if (!(value[value.length - 1] == "*")) {
    elDisplay.value += multip;
  } else {
    elDisplay.value;
  }
};

const checkplus = function (plus) {
  let value = elDisplay.value.split("");
  if (!(value[value.length - 1] == "+")) {
    elDisplay.value += plus;
  } else {
    elDisplay.value;
  }
};

const checkdivide = function (divide) {
  let value = elDisplay.value.split("");
  if (!(value[value.length - 1] == "/")) {
    elDisplay.value += divide;
  } else {
    elDisplay.value;
  }
};

const checkpercent = function (percent) {
  let value = elDisplay.value.split("");
  if (!(value[value.length - 1] == "%")) {
    elDisplay.value += percent;
  } else {
    elDisplay.value;
  }
};

const sum = function () {
  elDisplay.value = eval(elDisplay.value);
};

const checkdot = function (dot) {
  let value = elDisplay.value.split("");

  if (value[value.length - 1] != "." && !value.includes(".")) {
    elDisplay.value += dot;
  } else if (value[value.length - 1] != ".") {
    elDisplay.value += dot;
  } else {
    elDisplay.value;
  }
};

// !value.slice(0, value.indexOf(operator)).includes(".");
// const checkoperator = function (val) {
//   let value = elDisplay.value.split("");
//   if (!(value[value.length - 1] == "%" || "-" || "+" || "*" || "/" || ".")) {
//     elDisplay.value += val;
//   } else {
//     elDisplay.value;
//   }
// };

// const reset = function (value) {
//   if (elSum.value != 0) {
//     elDisplay.value = value;
//   }
// };

// elNumber.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   console.log("hi");

//   if (elSum.value != 0) {
//     elDisplay.value = 0;
//   }
// });

// elNumber.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   console.log("hi");
// });

// const checkalloperator = function (operator) {
//   let value = elDisplay.value.split("");
//   if (!(value[value.length - 1] == "+" || "-" || "*" || "/" || "%" || ".")) {
//     elDisplay.value += operator;
//   } else {
//     elDisplay.value;
//   }
// };

// console.log(
//   ["1", "2", "+", "2"].splice(["1", "2", "+", "2"].indexOf(operator))
// );
// console.log(operator);
