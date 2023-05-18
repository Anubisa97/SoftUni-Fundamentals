function leapYear(i) {
  if (i % 4 === 0 && i % 100 !== 0) {
    console.log("yes");
  } else if (i % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
leapYear(4);
