function charactersInRange(str1, str2) {
  let startChar = Math.min(str1.charCodeAt(), str2.charCodeAt());
  let endChar = Math.max(str1.charCodeAt(), str2.charCodeAt());
  let strArr = [];

  for (let index = startChar + 1; index < endChar; index++) {
    strArr.push(String.fromCharCode(index));
  }
  console.log(strArr.join(` `));
}
charactersInRange("#", ":");
