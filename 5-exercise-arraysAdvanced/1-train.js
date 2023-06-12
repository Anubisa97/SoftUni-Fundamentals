function train(input) {
  let wagons = input[0].split(` `).map(Number);
  let maxCapacity = Number(input[1]);
  let newTrain = wagons.slice(0);

  for (let index = 2; index < input.length; index++) {
    let command = input[index].split(` `);

    if (command[0] === "Add") {
      newTrain.push(Number(command[1]));
    } else {
      let num = Number(command);
      for (let j = 0; j < wagons.length; j++) {
        if (newTrain[j] + num <= maxCapacity) {
          newTrain[j] += num;
          break;
        }
      }
    }
  }
  console.log(newTrain.join(` `));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
