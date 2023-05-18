function login(input) {
  let index = 0;
  let user = input[index];
  index++;
  let arrayLength = input.length;
  let checkCount = 0;
  while (arrayLength > 0) {
    checkCount++;
    let pass = input[index];
    index++;

    const str = pass;

    let reversedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    if (reversedStr == user) {
      console.log(`"User ${user} logged in.`);
    } else if (checkCount === 4) {
      console.log(`User ${user} blocked!`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
