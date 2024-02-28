const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const decimal = document.querySelector("#decimal");
const operateBtn = document.querySelector("#operate");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const powerBtn = document.querySelector("#power");

let display = document.querySelector("#display");
const clearBtn = document.querySelector("#clear");

const numbers = document.querySelectorAll(".number");

let firstSelected = false;
let operatorSelected = false;
let secondSelected = false;

let firstSelection = "";
let secondSelection = "";

clearBtn.addEventListener('click', () => {
    if (!operatorSelected) {
        display.textContent = 0;
        firstSelection = 0;
        firstSelected = false;
    }
    else if (operatorSelected && !secondSelection) {
        display.textContent = firstSelection;
        operatorSelected = false;
        firstSelected = false;
    }
    else if (secondSelection) {
        display.textContent = firstSelection + opDisplay;
        secondSelection = "";
    }
})

zero.addEventListener('click', () => {
    if (!firstSelected && firstSelection) {
        firstSelection += "0";
        display.textContent = firstSelection;
    }
    if (!secondSelected && secondSelection) {
        secondSelection += "0";
        display.textContent = firstSelection + opDisplay + secondSelection;
    }
})

numbers.forEach((number)=> {
    number.addEventListener('click', () => {
        if (!firstSelected) {
            if (!firstSelection) {
                firstSelection = "";
            }
            firstSelection += number.textContent;
            display.textContent = firstSelection;
        }
        else if (!secondSelected) {
            secondSelection += number.textContent;
            display.textContent = firstSelection + opDisplay + secondSelection;
        }
    })
});

addBtn.addEventListener('click', () => {
    if (!operatorSelected) {
        firstSelected = true;
        operator = "add";
        opDisplay = " + "
        operatorSelected = true;
        display.textContent = (firstSelection + opDisplay);
    }
})

subtractBtn.addEventListener('click', () => {
    if (!operatorSelected) {
        firstSelected = true;
        operator = "subtract";
        opDisplay = " - "
        operatorSelected = true;
        display.textContent = (firstSelection + opDisplay);
    }
})

multiplyBtn.addEventListener('click', () => {
    if (!operatorSelected) {
        firstSelected = true;
        operator = "multiply";
        opDisplay = " * "
        operatorSelected = true;
        display.textContent = (firstSelection + opDisplay);
    }
})

divideBtn.addEventListener('click', () => {
    if (!operatorSelected) {
        firstSelected = true;
        operator = "divide";
        opDisplay = " / "
        operatorSelected = true;
        display.textContent = (firstSelection + opDisplay);
    }
})

powerBtn.addEventListener('click', () => {
    if (!operatorSelected) {
        firstSelected = true;
        operator = "power";
        opDisplay = " ^ "
        operatorSelected = true;
        display.textContent = (firstSelection + opDisplay);
    }
})

operateBtn.addEventListener('click', () => {
    if (firstSelected && operatorSelected && secondSelection) {
        operate(Number(firstSelection), Number(secondSelection), operator);
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