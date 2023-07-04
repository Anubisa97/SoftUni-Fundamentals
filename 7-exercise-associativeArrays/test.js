function cardGame(arr) {
  let all = {};
  let sum = 0;

  for (const entry of arr) {
    let [name, cards] = entry.split(": ");
    cards = cards.split(", ");

    if (all.hasOwnProperty(name)) {
      all[name] = all[name].concat(cards);
    } else {
      all[name] = cards;
    }
    all[name] = [...new Set(all[name])];
  }
  for (const entry of Object.entries(all)) {
    sum = 0;
    for (const num of entry[1]) {
      let b = num[num.length - 1];
      let a = num.split(b)[0];
      switch (a) {
        case "J":
          a = 11;
          break;
        case "Q":
          a = 12;
          break;
        case "K":
          a = 13;
          break;
        case "A":
          a = 14;
          break;
        default:
          a = Number(a);
      }
      switch (b) {
        case "S":
          b = 4;
          break;
        case "H":
          b = 3;
          break;
        case "D":
          b = 2;
          break;
        case "C":
          b = 1;
          break;
      }
      sum += a * b;
    }
    console.log(`${entry[0]}: ${sum}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
