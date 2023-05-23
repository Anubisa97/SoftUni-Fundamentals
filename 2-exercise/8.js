function calculator(number, operator, secondNumber) {
    let result = 0
    switch (operator) {
        case "+": result = number + secondNumber; break;
        case "-": result = number - secondNumber; break;
        case "/": result = number / secondNumber; break;
        case "*": result = number * secondNumber; break;
    }
    console.log(result.toFixed(2));
}
calculator(25.5,
    '-',
    3)