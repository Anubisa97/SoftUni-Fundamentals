function perfectNumber(input) {
  let sum = 0;
  for (let index = 1; index < input; index++) {
    if (input % index === 0) {
      sum += index;
    }
  }
  if (sum === input) {
    console.log(`We have a perfect number! `);
  } else {
    console.log(`It's not so perfect.`);
  }
}
perfectNumber(1236498);
