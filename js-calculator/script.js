const main = () => {
  let num1 = prompt("Enter first number");
  let num2 = prompt("Enter second number");
  let operator = prompt("Enter operator");

  let num1Asnum = Number(num1);
  let num2Asnum = Number(num2);

  if (isNaN(num1Asnum) || isNaN(num2Asnum)) {
    alert("Please enter a valid number");
  } else {
    let result;
    switch (operator) {
      case "+":
        result = sum(num1Asnum, num2Asnum);
        break;
      case "-":
        result = subtract(num1Asnum, num2Asnum);
        break;
      case "*":
        result = multiply(num1Asnum, num2Asnum);
        break;
      case "/":
        result = divide(num1Asnum, num2Asnum);
        break;
      default:
        alert("Please enter a valid operator");
        return;
    }
    alert(`Result is ${result}`);
  }
}

const sum = (num1, num2) => {
  return num1 + num2;
}

const subtract = (num1, num2) => {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const divide = (num1, num2) => {
  return num1 / num2;
}



























