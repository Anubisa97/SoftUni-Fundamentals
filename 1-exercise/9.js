function login(input) {
  let index = 0;
  let user = input[index];
  index++;
  for (let i = 1; i <= 10; i++) {
    let pass = input[index];
    index++;
    let splitStr = pass.split("");
    let reversedArr = splitStr.reverse();
    let reversedStr = reversedArr.join("");
    if (reversedStr == user) {
      console.log(`User ${user} logged in.`);
      break;
    } else if (i === 4) {
      console.log(`User ${user} blocked!`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
