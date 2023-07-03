function partTime(input) {
  let vipGuests = [];
  let regularGuests = [];
  let command = input.shift();

  while (command !== "PARTY") {
    let isVipCheck = command[0];
    if (isNaN(isVipCheck)) {
      regularGuests.push(command);
    } else {
      vipGuests.push(command);
    }
    command = input.shift();
  }
  for (const iterator of input) {
    if (vipGuests.includes(iterator)) {
      vipGuests.splice(vipGuests.indexOf(iterator), 1);
    } else if (regularGuests.includes(iterator)) {
      regularGuests.splice(regularGuests.indexOf(iterator), 1);
    }
  }
  let notComming = vipGuests.length + regularGuests.length;
  console.log(notComming);
  vipGuests.forEach((element) => {
    console.log(element);
  });
  regularGuests.forEach((element) => {
    console.log(element);
  });
}
partTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
