function replaceRepeatingChars(input) {
  let result = [];
  let text = input.split(``);
  for (let index = 1; index <= text.length; index++) {
    if (text[index] !== text[index - 1]) {
      result.push(text[index - 1]);
    }
  }
  console.log(result.join(``));
}
replaceRepeatingChars("qqqwerqwecccwd");
