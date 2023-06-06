function oddAndEvenSum(input) {
  let toArray = String(input);
  let oddSum = 0;
  let evenSum = 0;

  for (let index = 0; index < toArray.length; index++) {
    let currentNum = Number(toArray[index]);
    if (currentNum % 2 === 0) {
      evenSum += currentNum;
    } else {
      oddSum += currentNum;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
