function oddSum(input) {
  let count = 0;
  let sum = 0;
  for (let index = 1; index >= 0; index++) {
    if (index % 2 === 1) {
      console.log(index);
      count++;
      sum += index;
      if (count === input) {
        break;
      }
    }
  }
  console.log(`Sum: ${sum}`);
}
oddSum(3);
