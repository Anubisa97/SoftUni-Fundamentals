function heartDelivery(input) {
  let neighborhood = input
    .shift()
    .split(`@`)
    .map((x) => Number(x));
  let jumpIndex = 0;
  for (let index = 0; index < input.length; index++) {
    let command = input[index].split(` `);

    if (command[0] === "Jump") {
      jumpIndex += Number(command[1]);
      if (neighborhood.length - 1 < jumpIndex) {
        jumpIndex = 0;
      }
      if (neighborhood[jumpIndex] === 0) {
        console.log(`Place ${jumpIndex} already had Valentine's day.`);
        continue;
      }
      neighborhood[jumpIndex] -= 2;
      if (neighborhood[jumpIndex] === 0) {
        console.log(`Place ${jumpIndex} has Valentine's day.`);
      }
    } else {
      console.log(`Cupid's last position was ${jumpIndex}.`);
      let counter = 0;
      for (let i = 0; i < neighborhood.length; i++) {
        if (neighborhood[i] > 0) {
          counter++;
        }
      }
      if (counter === 0) {
        console.log("Mission was successful.");
      } else {
        console.log(`Cupid has failed ${counter} places.`);
      }
    }
  }
}
heartDelivery([
  "4@2@4@2",
  "Jump 1",
  "Jump 2",
  "Jump 1",
  "Jump 2",
  "Jump 2",
  "Jump 2",
  "Love!",
]);
