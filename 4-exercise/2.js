function addAndSubtract(sumOne, sumTwo, sub) {

  function sumNumbers(one, two) {
    return one + two;
  }

  sumNumbers(sumOne, sumTwo)

  function subtractNumbers(sumNumbers, sub) {
    return sumNumbers - sub
  }

return subtractNumbers(sub)

  console.log(subtractNumbers);

}
console.log(addAndSubtract(23, 6, 10));
