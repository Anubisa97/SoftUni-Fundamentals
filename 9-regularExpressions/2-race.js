function race(input) {
  let group = input.shift().split(`, `);
  let participants = {};
  for (const name of group) {
    participants[name] = 0;
  }
  let namePattern = /[A-Za-z]/g;
  let distancePattern = /\d/g;

  let line = input.shift();
  while (line !== "end of race") {
    let name = line.match(namePattern).join(``);
    let distance = line.match(distancePattern);
    let totalDistance = 0;
    distance.forEach((element) => {
      totalDistance += Number(element);
    });
    if (participants.hasOwnProperty(name)) {
      participants[name] += totalDistance;
    }
    line = input.shift();
  }
  let participantSorted = Object.entries(participants).sort(
    (a, b) => b[1] - a[1]
  );

  console.log(`1st place: ${participantSorted[0][0]}`);
  console.log(`2nd place: ${participantSorted[1][0]}`);
  console.log(`3rd place: ${participantSorted[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
