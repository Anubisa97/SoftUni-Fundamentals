function addAndRemove(arr) {
  let output = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === "add") {
      output.push(index + 1);
    } else if (arr[index] === "remove") {
      output.pop();
    }
  }

  if (output.length === 0) {
    console.log("Empty");
    return;
  }

  console.log(output.join(` `));
}
addAndRemove([]);
