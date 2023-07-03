function piccolo(input) {
  let cars = {};
  for (const car of input) {
    let line = car.split(`, `);
    if (line[0] === "IN") {
      cars[line[1]] = null;
    } else if (line[0] === "OUT") {
      delete cars[line[1]];
    }
  }
  if (Object.keys(cars).length === 0 && cars.constructor === Object) {
    return console.log(`Parking Lot is Empty`);
  }
  let result = Object.keys(cars).sort((a, b) => a.localeCompare(b));
  for (const iterator of result) {
    console.log(iterator);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
