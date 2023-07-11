function modernTimes(input) {
  let text = input.split(` `);
  for (const word of text) {
    if (word[0] === "#" && word.length >= 2) {
      let wordToCheck = word.split(``);
      wordToCheck.shift();
      let result = [];
      let notANumber = true;
      for (const letter of wordToCheck) {
        if (
          (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) ||
          (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)
        ) {
          result.push(letter);
        } else {
          notANumber = false;
          break;
        }
      }
      if (notANumber) {
        console.log(result.join(``));
      }
    }
  }
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
