function cutAndReverse(input) {
  let text = input.split(``);
  let firstHalf = [];
  let secondHalf = [];
  for (let index = 0; index < text.length / 2; index++) {
    firstHalf.push(text[index]);
  }
  for (let index = text.length / 2; index < text.length; index++) {
    secondHalf.push(text[index]);
  }

  console.log(firstHalf.reverse().join(``));
  console.log(secondHalf.reverse().join(``));
}
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
