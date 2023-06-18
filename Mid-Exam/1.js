function burgerBus(input) {
  let numOfCityes = Number(input.shift());
  let totalProfit = 0;
  for (let index = 1; index < numOfCityes + 1; index++) {
    let cityName = input.shift();
    let ownerIncome = Number(input.shift());
    let ownerExpenses = Number(input.shift());
    let raining = false;
    if (index % 5 === 0) {
      raining = true;
      ownerIncome *= 0.9;
    }
    if (index % 3 === 0 && !raining) {
      ownerExpenses *= 1.5;
    }
    let profit = ownerIncome - ownerExpenses;

    totalProfit += profit;
    console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
  }
  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
burgerBus([
  "5",

  "Lille",

  "2226.00",

  "1200.60",

  "Rennes",

  "6320.60",

  "5460.20",

  "Reims",

  "600.20",

  "452.32",

  "Bordeaux",

  "6925.30",

  "2650.40",

  "Montpellier",

  "680.50",

  "290.20",
]);
