function stringSubstring(word, text) {
  let textToCheck = text.split(` `);
  let isNotFound = true;
  for (const words of textToCheck) {
    if (word.toLowerCase() === words.toLowerCase()) {
      console.log(word);
      isNotFound = false;
      break;
    }
  }
  if (isNotFound) {
    console.log(`${word} not found!`);
  }
}
stringSubstring("JavaScript", "JavaScript is the best programming language");
