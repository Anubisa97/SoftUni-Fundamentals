function magicNumber(array, num) {
  for (let index = 0; index < array.length; index++) {
    for (let currenI = index; currenI < array.length; currenI++) {
      if (index !== currenI) {
        let currentSum = array[index] + array[currenI];
        if (currentSum === num) {
          console.log(`${array[index]} ${array[currenI]}`);
        }
      }
    }
  }
}
magicNumber([1, 2, 3, 4, 5, 6], 6);
