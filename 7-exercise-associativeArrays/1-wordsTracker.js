function wordsTracker(input) {
  let words = {};
  let wordsToFind = input.shift().split(` `);
  wordsToFind.forEach((element) => {
    words[element] = 0;
  });
  for (const word of input) {
    if (words.hasOwnProperty(word)) {
      words[word] += 1;
    }
  }
  let wordsSorted = Object.entries(words).sort((a, b) => b[1] - a[1]);
  for (const word of wordsSorted) {
    console.log(`${word[0]} - ${word[1]}`);
  }
}
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
