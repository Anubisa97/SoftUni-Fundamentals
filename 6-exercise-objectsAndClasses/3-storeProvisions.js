function storeProvisions(arrayOne, arrayTwo) {
  let provisions = {};
  for (let index = 0; index < arrayOne.length; index += 2) {
    let product = arrayOne[index];
    let provision = arrayOne[index + 1];
    provisions[product] = Number(provision);
  }
  for (let index = 0; index < arrayTwo.length; index += 2) {
    let product = arrayTwo[index];

    if (!provisions.hasOwnProperty(product)) {
      provisions[product] = 0;
    }
    provisions[product] += Number(arrayTwo[index + 1]);
  }
  for (const key in provisions) {
    console.log(`${key} -> ${provisions[key]}`);
  }
}
storeProvisions(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
