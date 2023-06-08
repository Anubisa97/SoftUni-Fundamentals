function palindromeIntegers(arr) {
  for (let index = 0; index < arr.length; index++) {
    let toString = String(arr[index]);
    let reverseString = toString.split("").reverse().join("");
    let toNum = Number(reverseString);
    if (arr[index] === toNum) {
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  }
}
palindromeIntegers([32, 2, 232, 1010]);
