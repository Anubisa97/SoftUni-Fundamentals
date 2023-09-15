function followers(input) {
  let fans = [];
  for (const line of input) {
    if (line === "Log out") {
      break;
    }
    let [command, ...token] = line.split(` `);
    if (command === "New") {
      command = command + " " + token[0];
    }
    let username;
    let hasFan;
    let size;
    switch (command) {
      case "New follower:":
        username = token[1];
        hasFan = fans.find((x) => x.username === username);
        if (hasFan) {
        } else {
          let newFan = {
            username,
            likes: 0,
            comments: 0,
          };
          fans.push(newFan);
        }
        break;
      case "Like:":
        username = token[0];
        size = username.length - 1;
        username = username.split(``).splice(0, size, 1).join(``);
        let count = +token[1];
        hasFan = fans.find((x) => x.username === username);
        if (hasFan) {
          hasFan.likes += count;
        } else {
          let newFan = {
            username,
            likes: count,
            comments: 0,
          };
          fans.push(newFan);
        }
        break;
      case "Comment:":
        username = token[0];
        size = username.length - 1;
        username = username.split(``).splice(0, size, 1).join(``);
        username = token[0];
        hasFan = fans.find((x) => x.username === username);
        if (hasFan) {
          hasFan.comments += 1;
        } else {
          let newFan = {
            username,
            likes: 0,
            comments: 1,
          };
          fans.push(newFan);
        }
        break;
      case "Blocked:":
        username = token[0];
        size = username.length - 1;
        username = username.split(``).splice(0, size, 1).join(``);
        username = token[0];
        hasFan = fans.find((x) => x.username === username);
        if (hasFan) {
          fans.splice(fans.indexOf(hasFan), 1);
        } else {
          console.log(`${username} doesn't exist.`);
        }
        break;
    }
  }
  console.log(`${fans.length} followers`);
  for (const line of fans) {
    console.log(`${line.username}: ${line.likes + line.comments}`);
    // for (const el of line) {
    //     console.log(`${line.username}: {likes+comments}`);
    // }
  }
}
followers([
  "Blocked: Amy",
  "Comment: Amy",
  "New follower: Amy",
  "Like: Tom: 5",
  "Like: Ellie: 5",
  "Log out",
]);
