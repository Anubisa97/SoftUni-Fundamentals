function blackFlag(input) {
  let array = input.map((a) => (a = Number(a)));
  let daysToPlunder = array[0];
  let dailyPlunder = array[1];
  let expectedPlunder = array[2];
  let totalPlunder = 0;
  for (let index = 1; index <= daysToPlunder; index++) {
    totalPlunder += dailyPlunder;
    if (index % 3 === 0) {
      totalPlunder += dailyPlunder * 0.5;
    }
    if (index % 5 === 0) {
      totalPlunder *= 0.7;
    }
  }
  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (totalPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
//blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
