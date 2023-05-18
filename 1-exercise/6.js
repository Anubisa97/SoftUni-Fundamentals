function printAndSum(a, b) {
  let buffer = "";
  let sum = 0;
  for (let index = a; index <= b; index++) {
    buffer += `${index} `;
    sum += index;
  }
  console.log(buffer);
  console.log(`Sum: ${sum}`);
}
printAndSum(0, 26);
36;
