function nxNMatrix(input) {
  let toString = input.toString();
  for (let i = 0; i < input; i++) {
    let row = ``;
    for (let j = 0; j < input; j++) {
      row += `${input} `;
    }
    console.log(row);
  }
}
nxNMatrix(3);
