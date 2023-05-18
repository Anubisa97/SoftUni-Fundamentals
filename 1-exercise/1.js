function ages(input) {
  let age = ``;
  if (input < 0) {
    age = `out of bounds`;
  } else if (input >= 0 && input <= 2) {
    age = `baby`;
  } else if (input <= 13) {
    age = `child`;
  } else if (input <= 19) {
    age = `teenager`;
  } else if (input <= 65) {
    age = `adult`;
  } else if (input >= 66) {
    age = `elder`;
  }
  console.log(age);
}
ages(52);
