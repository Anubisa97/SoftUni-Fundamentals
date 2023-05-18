function devisions(input) {
  number = ``;
  if (input % 10 === 0) {
    number = `10`;
  } else if (input % 7 === 0) {
    number = `7`;
  } else if (input % 6 === 0) {
    number = `6`;
  } else if (input % 3 === 0) {
    number = `3`;
  } else if (input % 2 === 0) {
    number = `2`;
  }

  if (number) {
    console.log(`The number is divisible by ${number}`);
  } else {
    console.log(`Not divisible`);
  }
}
devisions(12);
