function addAndSubtract(arr) {
  let newArr = [];
  let sumOriginal = 0;
  let sumModified = 0;

  for (let index = 0; index < arr.length; index++) {
    sumOriginal += arr[index];
    if (arr[index] % 2 === 0) {
      newArr.push(arr[index] + index);
      sumModified += arr[index] + index;
    } else {
      newArr.push(arr[index] - index);
      sumModified += arr[index] - index;
    }
  }
  console.log(newArr);
  console.log(sumOriginal);
  console.log(sumModified);
}
addAndSubtract([5, 15, 23, 56, 35]);
