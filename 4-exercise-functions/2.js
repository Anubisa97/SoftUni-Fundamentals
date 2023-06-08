function addAndSubtract(numOne, numTwo, numThree) {
  function sum(one, two) {
    return one + two;
  }
  let sumResult = sum(numOne, numTwo);

  function subtract(sum, three) {
    return sum - three;
  }
  return subtract(sumResult, numThree);
}
console.log(addAndSubtract(23, 6, 10));
