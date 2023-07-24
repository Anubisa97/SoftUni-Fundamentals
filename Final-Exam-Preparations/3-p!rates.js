function pirates(input) {
  let target = [];

  for (const line of input) {
    if (line === "Sail") {
      break;
    }
    let [city, people, gold] = line.split(`||`);
    people = +people;
    gold = +gold;
    let hasCity = target.find((x) => x.city === city);
    if (hasCity) {
      hasCity.people += people;
      hasCity.gold += gold;
    } else {
      let newTarget = {
        city,
        people: people,
        gold: gold,
      };
      target.push(newTarget);
    }
  }

  let sailIndex = input.indexOf("Sail");
  for (let i = sailIndex + 1; i < input.length; i++) {
    if (input[i] === "End") {
      break;
    }

    let [event, city, token1, token2] = input[i].split(`=>`);
    let gold;
    let people;
    let currentCity = target.find((x) => x.city === city);
    switch (event) {
      case "Plunder":
        // if (!currentCity) {
        //   break;
        // }
        people = Number(token1);
        gold = Number(token2);

        currentCity.people -= people;
        currentCity.gold -= gold;

        console.log(
          `${city} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );
        if (currentCity.people <= 0 || currentCity.gold <= 0) {
          target.splice(target.indexOf(currentCity), 1);
          console.log(`${city} has been wiped off the map!`);
        }
        break;
      case "Prosper":
        if (!currentCity) {
          break;
        }
        gold = Number(token1);
        if (gold < 0) {
          console.log("Gold added cannot be a negative number!");
        } else {
          currentCity.gold += gold;
          console.log(
            `${gold} gold added to the city treasury. ${city} now has ${currentCity.gold} gold.`
          );
        }
        break;
    }
  }
  console.log(
    `Ahoy, Captain! There are ${target.length} wealthy settlements to go to:`
  );
  if (target.length > 0) {
    for (const line of target) {
      console.log(
        `${line.city} -> Population: ${line.people} citizens, Gold: ${line.gold} kg`
      );
    }
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  }
}
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Posdsdrt Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
