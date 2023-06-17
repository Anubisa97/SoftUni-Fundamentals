function arrayModifier(input) {
  let array = input
    .shift()
    .split(` `)
    .map((x) => Number(x));

  for (let index = 0; index < input.length; index++) {
    let command = input[index].split(` `);
    let index1 = Number(command[1]);
    let index2 = Number(command[2]);

    switch (command[0]) {
      case "swap":
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        break;
      case "multiply":
        array[index1] *= array[index2];
        break;
      case "decrease":
        //array = array.map((x) => x - 1); //also works
        for (let i = 0; i < array.length; i++) {
          array[i] -= 1;
        }
        break;
      case "end":
        return console.log(array.join(`, `));
    }
  }
  console.log(array.join(`, `));
}
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
