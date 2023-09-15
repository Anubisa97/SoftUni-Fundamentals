function passwordValidator(input) {
  let password = input.shift();
  for (const line of input) {
    if (line === "Complete") {
      break;
    }
    let [command, ...token] = line.split(` `);
    if (command === "Make") {
      command = command + " " + token[0];
    }
    let index;
    let char;
    switch (command) {
      case "Make Upper":
        index = +token[1];
        char = password[index];
        password = password.replace(char, password[index].toUpperCase());
        console.log(password);
        break;
      case "Make Lower":
        index = +token[1];
        char = password[index];
        password = password.replace(char, password[index].toLowerCase());
        console.log(password);
        break;
      case "Insert":
        index = +token[0];
        char = token[1];
        if (index > -1 && index < password.length - 1) {
          let password2 = password.slice(0, index) + char + password.slice(3); // трябва да се тества
          password = password2;
          console.log(password);
        } // password.length може да трябва - 1

        break;
      case "Replace":
        char = token[0];
        if (password.includes(char)) {
          let sum = char.charCodeAt() + +token[1];
          let newChar = String.fromCharCode(sum);
          while (password.includes(char)) {
            password = password.replace(char, newChar);
          }
          console.log(password);
        }
        break;
      case "Validation":
        if (password.length < 8) {
          console.log("Password must be at least 8 characters long!");
        }
        let pattern1 = /^[A-Za-z0-9_]+$/;
        if (!pattern1.test(password)) {
          console.log("Password must consist only of letters, digits and _!");
        }
        let pattern2 = /(?=.*[A-Z])/;
        if (!pattern2.test(password)) {
          console.log("Password must consist at least one uppercase letter!");
        }
        let pattern3 = /(?=.*[a-z])/;
        if (!pattern3.test(password)) {
          console.log("Password must consist at least one lowercase letter!");
        }
        let pattern4 = /(?=.*\d)/;
        if (!pattern4.test(password)) {
          console.log("Password must consist at least one digit!");
        }
        break;
    }
  }
}
passwordValidator([
  "189",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
