function distinctArray(arr) {
  //   for (let index = 0; index < arr.length; index++) {
  //     let firstNum = arr[index];
  //     for (let j = index + 1; j < arr.length; j++) {
  //       let secondNum = arr[j];
  //       if (firstNum === secondNum) {
  //         arr.splice(j, 1);
  //       }
  //     }
  //   }
  //   console.log(arr.join(` `));
  // }
  let uniqueElements = [];
  for (const i of arr) {
    if (!uniqueElements.includes(i)) {
      uniqueElements.push(i);
    }
  }
  console.log(uniqueElements.join(` `));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
