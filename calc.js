const zero = document.querySelector("#0");
const one = document.querySelector("#1");
const two = document.querySelector("#2");
const three = document.querySelector("#3");
const four = document.querySelector("#4");
const five = document.querySelector("#5");
const six = document.querySelector("#6");
const seven = document.querySelector("#7");
const eight = document.querySelector("#8");
const nine = document.querySelector("#9");

const decimal = document.querySelector("#decimal");
const operateBtn = document.querySelector("#operate");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const powerBtn = document.querySelector("#power");

zero.addEventListener('click', () => {
    if (!firstSelected) {
        firstSelection += "0";
    }
})

addBtn.addEventListener('click', () => {
    if (!operatorSelected) {
        firstSelected = true;
        operator = "add";
        operatorSelected = true;
    }
})

const operate = function(firstNum, secondNum, operator) {
    switch (operator) {
        case "add":
            console.log(add(firstNum, secondNum));
            break;
        case "subtract":
            console.log(subtract(firstNum, secondNum));
            break;
        case "multiply":
            console.log(multiply(firstNum, secondNum));
            break;
        case "divide":
            console.log(divide(firstNum, secondNum));
            break;
        case "power":
            console.log(power(firstNum, secondNum));
            break;
    }
};

const add = function(num1, num2) {
    const addThese = [num1, num2];
    return addThese.reduce((total, currentItem) => total + currentItem, 0);
};
  
const subtract = function(num1, num2) {
    const subtractThese = [num1, num2];
    return subtractThese.reduce((total, currentItem) => total - currentItem);
};
  
const multiply = function(num1, num2) {
    const multiplyThese = [num1, num2];
    return multiplyThese.reduce((total, currentItem) => total * currentItem, 1);
};

const divide = function(num1, num2) {
    if (num2 != 0) {
        const divideThese = [num1, num2];
    return divideThese.reduce((total, currentItem) => total / currentItem, power(divideThese[0],2));
    }
    else {
        return "Nice try! But there are infinite reasons not to divide by zero.";
    }
};
  
const power = function(num, power) {
    let powerUp = num;
    while (power-1) {
      powerUp = powerUp * num;
      power--;
    }
    return powerUp;
};