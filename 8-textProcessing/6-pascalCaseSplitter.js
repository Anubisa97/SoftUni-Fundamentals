function pascalCaseSplitter(input) {
  let output = `${input[0]}`;
  for (let i = 1; i < input.length; i++) {
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
      output += `, ${input[i]}`;
    } else {
      output += input[i];
    }
  }
  console.log(output);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
