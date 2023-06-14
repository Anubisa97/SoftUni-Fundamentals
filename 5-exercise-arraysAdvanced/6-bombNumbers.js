function bombNumbers(numbersArr, bombArr) {
  let bombNum = bombArr[0];
  let bombPow = bombArr[1];

  while (numbersArr.includes(bombNum)) {
    let bombIndex = numbersArr.indexOf(bombNum);
    let start = bombIndex - bombPow;
    let remove = bombPow * 2 + 1;
    if (start < 0) {
      start = 0;
    }
    if (start + remove > numbersArr.length) {
      remove = numbersArr.length - start;
    }
    numbersArr.splice(start, remove);
  }
  let sum = 0;
  for (let index = 0; index < numbersArr.length; index++) {
    sum += numbersArr[index];
  }

  console.log(sum);
}
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
