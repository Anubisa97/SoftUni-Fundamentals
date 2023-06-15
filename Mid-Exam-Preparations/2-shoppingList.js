function shoppingList(input) {
  let list = input[0].split(`!`);
  let index = 1;
  let command = input[index];
  index++;
  while (command !== "Go Shopping!") {
    let token = command.split(` `);
    let task = token[0];
    let item = token[1];
    switch (task) {
      case "Urgent":
        if (!list.includes(item)) {
          list.unshift(item);
        }
        break;
      case "Unnecessary":
        if (list.includes(item)) {
          list.splice(list.indexOf(item), 1);
        }
        break;
      case "Correct":
        let oldItem = token[1];
        let newItem = token[2];

        if (list.includes(oldItem)) {
          list[list.indexOf(oldItem)] = newItem;
        }
        break;
      case "Rearrange":
        if (list.includes(item)) {
          let currentItem = list.splice(list.indexOf(item), 1);
          list.push(currentItem[0]);
        }

        break;
    }
    command = input[index];
    index++;
  }

  console.log(list.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
