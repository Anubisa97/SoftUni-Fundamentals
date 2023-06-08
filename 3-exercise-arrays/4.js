function arrayRotation(arr, rotations) {
  for (let index = 0; index < rotations; index++) {
    let currnetNum = arr.shift();
    arr.push(currnetNum);
  }
  console.log(arr.join(` `));
}
arrayRotation([51, 47, 32, 61, 21], 2);
