function deckOfCards(input) {
  let listOfCards = input.shift().split(`, `);
  let lines = Number(input.shift());
  for (let index = 0; index < lines; index++) {
    let token = input[index].split(`, `);
    let command = token[0];
    switch (command) {
      case "Add":
        let cardName = token[1];
        if (listOfCards.includes(cardName)) {
          console.log("Card is already in the deck");
          break;
        }
        listOfCards.push(cardName);
        console.log("Card successfully added");
        break;
      case "Remove":
        let cardsName = token[1];
        if (listOfCards.includes(cardsName)) {
          listOfCards.splice(listOfCards.indexOf(cardsName), 1);
          console.log("Card successfully removed");
          break;
        } else {
          console.log("Card not found");
        }
        break;
      case "Remove At":
        let i = Number(token[1]);
        if (i >= 0 && i < listOfCards.length) {
          listOfCards.splice(i, 1);
          console.log(`Card successfully removed`);
        } else {
          console.log("Index out of range");
        }
        break;
      case "Insert":
        let insertIndex = Number(token[1]);
        let insertName = token[2];
        if (insertIndex >= 0 && insertIndex < listOfCards.length) {
          if (listOfCards.includes(insertName)) {
            console.log("Card is already added");
            break;
          }
          listOfCards.splice(insertIndex, 0, insertName);
          console.log("Card successfully added");
        } else {
          console.log("Index out of range");
        }
        break;
    }
  }
  console.log(listOfCards.join(`, `));
}
deckOfCards([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds",
]);
console.log(`---------------------------------`);
deckOfCards([
  "Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
  "2",
  "Add, Two of Clubs",
  "Remove, Five of Hearts",
]);
console.log(`---------------------------------`);
deckOfCards([
  "Jack of Spades, Ace of Clubs, Jack of Clubs",
  "2",
  "Insert, -1, Queen of Spades",
  "Remove At, 1",
]);
