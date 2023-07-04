function cardGame(input) {
  let cardValues = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let cardTypes = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  let personName = {};
  for (const person of input) {
    let line = person.split(` `);
    let name = line.shift().split(`:`)[0];
    if (!personName.hasOwnProperty(name)) {
      personName[name] = [];
    }
    line.forEach((element) => {
      let char = element.split(`,`)[0];
      if (!personName[name].includes(char)) {
        personName[name].push(char);
      }
    });
  }

  for (const name in personName) {
    let total = 0;
    for (const iterator of personName[name]) {
      let type = iterator[iterator.length - 1];
      let value = iterator.split(type)[0];
      total += cardValues[value] * cardTypes[type];
    }
    console.log(`${name}: ${total}`);
  }
}
cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
