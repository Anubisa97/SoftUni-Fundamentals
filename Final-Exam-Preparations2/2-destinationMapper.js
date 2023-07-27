function destinationMapper(input) {
  let string = input;
  let pattern = /([=]|[\/])([A-Z][A-Za-z]{2,})\1/g;
  let match = string.match(pattern);
  let result = [];
  let points = 0;
  if (match) {
    match.forEach((element) => {
      points += element.length - 2;
      result.push(element.substring(1, element.length - 1));
    });
  }

  console.log(`Destinations: ${result.join(`, `)}`);
  console.log(`Travel Points: ${points}`);
}
destinationMapper("ThisIs some InvalidInput");
