function mergeArrays(firstArray, secondArra) {
  let newArray = [];
  for (let index = 0; index < firstArray.length; index++) {
    let currentNum = Number(firstArray[index]);
    let currentNum2 = Number(secondArra[index]);
    if (index % 2 === 0) {
      newArray.push(currentNum + currentNum2);
    } else {
      newArray.push(`${firstArray[index]}${secondArra[index]}`);
    }
  }
  console.log(newArray.join(` - `));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
