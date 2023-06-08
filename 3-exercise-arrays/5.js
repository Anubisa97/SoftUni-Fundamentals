function maxNumber(input) {
  let maxInteger = [];
  let isLarger = true;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      if (input[i] <= input[j]) {
        isLarger = false;
        break;
      } else {
        isLarger = true;
      }
    }
    if (isLarger) {
      maxInteger.push(input[i]);
    }
  }
  console.log(maxInteger.join(` `));
}
maxNumber([1, 4, 3, 2]);
