function bombNumbers(numbersArr, bombArr) {
  let numbers = numbersArr.slice();
  let bombNum = bombArr[0];
  let bombPow = bombArr[1];
  let bombIndex = bombIndex.indexOf(bombNum)
  for (let index = 0; index < numbers.length; index++) {
    if (bombNum === numbers[index]) {
      numbers.splice(5, 1);
    }
  }
  console.log(numbers);

  
}
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
