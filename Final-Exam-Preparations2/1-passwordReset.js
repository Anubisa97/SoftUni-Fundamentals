function passwordReset(input) {
  let password = input.shift().split(``);
  let result = [];
  for (const line of input) {
    if (line === "Done") {
      break;
    }
    let [command, token1, token2] = line.split(` `);

    switch (command) {
      case "TakeOdd":
        let raw = "";
        password.forEach((element, index) => {
          if (index % 2 !== 0) {
            raw += element;
          }
        });
        console.log(raw);
        password = raw.split(``);
        break;
      case "Cut":
        let index = +token1;
        let length = +token2;
        password.splice(index, length);
        console.log(password.join(``));
        break;
      case "Substitute":
        result = password.join(``);
        if (result.includes(token1)) {
          while (result.includes(token1)) {
            result = result.replace(new RegExp(token1, `g`), token2);
          }
          console.log(result);
        } else {
          console.log("Nothing to replace!");
        }
        password = result.split(``);
        break;
    }
  }
  console.log(`Your password is: ${password.join(``)}`);
}
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
