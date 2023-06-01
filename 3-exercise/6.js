function equalSums(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let isEqual = false;

  for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
    for (let movingIndex = 0; movingIndex < arr.length; movingIndex++) {
      if (currentIndex !== movingIndex) {
        let num = arr[movingIndex];
        if (movingIndex < currentIndex) {
          leftSum += num;
        } else if (movingIndex > currentIndex) {
          rightSum += num;
        }
      }
      if (currentIndex === 0) {
        leftSum = 0;
      } else if (currentIndex === arr.length - 1) {
        rightSum = 0;
      }
    }
    if (leftSum === rightSum) {
      console.log(currentIndex);
      isEqual = true;
    } else {
      leftSum = 0;
      rightSum = 0;
    }
  }
  if (!isEqual) {
    console.log(`no`);
  }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
