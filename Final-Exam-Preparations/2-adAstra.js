function аdAstra(input) {
  let text = input;
  let pattern =
    /(#|\|)(?<item>[a-zA-Z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let foodInfo = pattern.exec(text);

  let totalCalories = 0;

  let buffer = "";

  while (foodInfo) {
    let itemName = foodInfo.groups.item;
    let expirationDate = foodInfo.groups.date;
    let calories = +foodInfo.groups.calories;
    totalCalories += calories;
    buffer += `Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}\n`;
    foodInfo = pattern.exec(text);
  }
  let days = Math.floor(totalCalories / 2000);

  console.log(`You have food to last you for: ${days} days!`);
  console.log(buffer);
}
аdAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
