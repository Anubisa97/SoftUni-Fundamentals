function printNthElement(array) {
  let arrayLenght = array.length;
  let getNthElement = Number(array[arrayLenght - 1]);
  let elements = [];

  for (let index = 0; index < arrayLenght - 1; index += getNthElement) {
    elements.push(array[index]);
  }
  console.log(elements.join(" "));
}
printNthElement(['1', '2', '3', '4', '5', '6'] );
