function triangle(input) {
  for (let a = 1; a <= input; a++) {
    let buff = "";
    for (let b = 1; b <= a; b++) {
      buff += `${a} `;
    }
    console.log(buff);
  }
}
triangle(90);
