function numbers(num, precision) {
  let rounded = num;
  let rouding = precision;
  if (precision > 15) {
    rouding = 15;
  }
  console.log(parseFloat(rounded.toFixed(rouding)));
}
numbers(10.5, 3);
