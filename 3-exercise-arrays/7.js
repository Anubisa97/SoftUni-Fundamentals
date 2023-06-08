function maxSequence(array) {
  let biggestSequence = 0;
  let sequance = 1;
  let currentSequence = 0;

  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      let currentNum = array[i];
      let previousNum = array[i - 1];
      if (currentNum === previousNum) {
        sequance++;
        if (sequance > biggestSequence) {
          biggestSequence = sequance;
          currentSequence = currentNum;
        }
      } else {
        sequance = 1;
      }
    }
  }
  console.log((currentSequence + ` `).repeat(biggestSequence));
}
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
