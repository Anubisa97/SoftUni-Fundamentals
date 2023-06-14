function searchForANumber(arr1, arr2) {
  let toTake = arr2[0];
  let toRemove = arr2[1];
  let toFind = arr2[2];
  let number = 0;
  let newElement = arr1.slice(0, toTake);
  let removeFromElement = newElement.splice(0, toRemove);
  for (const iterator of newElement) {
    if (iterator === toFind) {
      number++;
    }
  }
  console.log(`Number ${toFind} occurs ${number} times.`);
}
searchForANumber([5, 2, 3, 3, 4, 1, 6], [5, 2, 3]);
