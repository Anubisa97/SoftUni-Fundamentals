function friendListMaintenance(input) {
  let friendList = input.shift().split(`, `);
  for (let index = 0; index < input.length - 1; index++) {
    let token = input[index].split(` `);
    let command = token[0];
    let name = token[1];
    let i = friendList.indexOf(name);
    let j = Number(token[1]);
    switch (command) {
      case "Blacklist":
        if (!friendList.includes(name)) {
          console.log(`${name} was not found.`);
          break;
        }
        friendList.splice(i, 1, "Blacklisted");
        // friendList.shift();
        // friendList.unshift("Blacklisted");
        console.log(`${name} was blacklisted.`);
        break;
      case "Error":
        if (j >= 0 && j < friendList.length) {
          let lostName = friendList[j];
          if (friendList[j] !== "Blacklisted" && friendList[j] !== "Lost") {
            friendList.splice(name, 1, "Lost");
            console.log(`${lostName} was lost due to an error.`);
          }
        }

        break;
      case "Change":
        let newName = token[2];
        let oldName = friendList[j];
        if (j >= 0 && j < friendList.length) {
          friendList.splice(j, 1, newName);
          console.log(`${oldName} changed his username to ${newName}.`);
        }

        break;
    }
  }
  let blacklisted = 0;
  let lost = 0;
  for (let i = 0; i < friendList.length; i++) {
    if (friendList[i] === "Blacklisted") {
      blacklisted++;
    } else if (friendList[i] === "Lost") {
      lost++;
    }
  }
  console.log(`Blacklisted names: ${blacklisted}`);
  console.log(`Lost names: ${lost}`);
  console.log(friendList.join(` `));
}
friendListMaintenance([
  "Mike, John, Eddie",
  "Blacklist Mike",
  "Error 0",
  "Report",
]);
console.log(`--------------------------`);
friendListMaintenance([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);
console.log(`--------------------------`);
friendListMaintenance([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
