function factorialDivision(numOne, numTwo) {
  function factorial(num) {
    let factorial = num;
    for (let index = num - 1; index > 1; index--) {
      factorial *= index;
    }
    return factorial;
  }
  let firstFactorial = factorial(numOne);
  let secondFactorial = factorial(numTwo);

  let devision = firstFactorial / secondFactorial;
  console.log(devision.toFixed(2));
}
factorialDivision(6, 2);
