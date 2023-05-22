function sumDigits(input) {
  let string = input.toString();
  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    sum += Number(string[index]);
  }
  console.log(sum);
}
sumDigits(245678);
