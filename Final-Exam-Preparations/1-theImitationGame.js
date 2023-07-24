function theImitationGame(input) {
  let message = input.shift();

  let line = input.shift();

  while (line !== "Decode") {
    let [command, secondCommand, thirdCommand] = line.split(`|`);

    switch (command) {
      case "Move":
        for (let index = 0; index < Number(secondCommand); index++) {
          let letter = message.substring(0, 1);
          let newMessage = message.substring(1);
          message = newMessage + letter;
        }
        break;
      case "Insert":
        let firstPart = message.substring(0, Number(secondCommand));
        let secondPart = message.substring(Number(secondCommand));
        message = firstPart + thirdCommand + secondPart;
        break;
      case "ChangeAll":
        while (message.includes(secondCommand)) {
          message = message.replace(secondCommand, thirdCommand);
        }

        break;
    }
    line = input.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
// theImitationGame([
//   "owyouh",
//   "Move|2",
//   "Move|3",
//   "Insert|3|are",
//   "Insert|9|?",
//   "Decode",
// ]);
