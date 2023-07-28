function NFS(input) {
  let numOfCars = +input.shift();
  let cars = [];

  for (let i = 0; i < numOfCars; i++) {
    let [model, milage, fuel] = input.shift().split(`|`);
    let newCar = {
      model,
      mileage: +milage,
      fuel: +fuel,
    };
    cars.push(newCar);
  }

  for (const line of input) {
    if (line === "Stop") {
      break;
    }
    let [command, ...token] = line.split(` : `);
    let car = token[0];
    let distance;
    let fuel;
    let currentCar = cars.find((x) => x.model === car);

    switch (command) {
      case "Drive":
        distance = +token[1];
        fuel = +token[2];

        if (currentCar.fuel < fuel) {
          console.log("Not enough fuel to make that ride");
        } else {
          currentCar.mileage += distance;
          currentCar.fuel -= fuel;
          console.log(
            `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
          );
        }

        if (currentCar.mileage >= 100000) {
          cars.splice(cars.indexOf(currentCar), 1);
          console.log(`Time to sell the ${currentCar.model}!`);
        }
        break;
      case "Refuel":
        fuel = +token[1];
        let sum = currentCar.fuel + fuel;
        if (sum > 75) {
          currentCar.fuel = 75;
          sum -= 75;
          console.log(`${car} refueled with ${fuel - sum} liters`);
        } else {
          currentCar.fuel = sum;
          console.log(`${car} refueled with ${fuel} liters`);
        }
        break;
      case "Revert":
        let kilometers = +token[1];
        currentCar.mileage -= kilometers;
        if (currentCar.mileage < 10000) {
          currentCar.mileage = 10000;
        } else {
          console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }

        break;
    }
  }
  for (const car of cars) {
    console.log(
      `${car.model} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`
    );
  }
}
NFS([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
