const add = function(num1, num2) {
    const addThese = [num1, num2];
    return addThese.reduce((total, currentItem) => total + currentItem, 0);
  };
  
  const subtract = function(num1, num2) {
    const subtractThese = [num1, num2];
    return subtractThese.reduce((total, currentItem) => total - currentItem);
  };
  
  const sum = function(array) {
      return array.reduce((total, currentItem) => total + currentItem, 0);
  };
  
  const multiply = function(array) {
    return array.reduce((total, currentItem) => total * currentItem, 1);
  };
  
  const power = function(num, power) {
    let powerUp = num;
    while (power-1) {
      powerUp = powerUp * num;
      power--;
    }
    return powerUp;
  };