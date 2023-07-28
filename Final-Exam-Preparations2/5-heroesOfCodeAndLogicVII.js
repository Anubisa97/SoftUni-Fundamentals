function heroesOfCodeAndLogicVII(input) {
  let numOfHeroes = input.shift();
  let heroes = [];
  for (let i = 0; i < numOfHeroes; i++) {
    let [name, HP, MP] = input.shift().split(` `);
    if (HP > 100) {
      HP = 100;
    } else if (MP > 200) {
      MP = 200;
    }
    let newHero = {
      name,
      HP: +HP,
      MP: +MP,
    };
    heroes.push(newHero);
  }

  // let line = input.shift();
  // while (line !== "End") {

  for (const line of input) {
    if (line === "End") {
      break;
    }
    let [command, name, ...token] = line.split(` - `);
    let currentHero = heroes.find((x) => x.name === name);
    let sum;

    // if (command === "CastSpell") {
    //   let manaNeeded = +token[0];
    //   if (currentHero.MP >= manaNeeded) {
    //     currentHero.MP -= manaNeeded;
    //     console.log(
    //       `${name} has successfully cast ${token[1]} and now has ${currentHero.MP} MP!`
    //     );
    //   } else {
    //     console.log(`${name} does not have enough MP to cast ${token[1]}!`);
    //   }
    // } else if (command === "TakeDamage") {
    //   let damage = token[0];
    //   currentHero.HP -= damage;
    //   if (currentHero.HP > 0) {
    //     console.log(
    //       `${name} was hit for ${damage} HP by ${token[1]} and now has ${currentHero.HP} HP left!`
    //     );
    //   } else {
    //     console.log(`${name} has been killed by ${token[1]}!`);
    //     heroes.splice(heroes.indexOf(currentHero), 1);
    //   }
    // } else if (command === "Recharge") {
    //   let recharge = +token[0];
    //   sum = currentHero.MP + recharge;
    //   if (sum > 200) {
    //     currentHero.MP = 200;
    //     sum -= 200;
    //     console.log(`${name} recharged for ${recharge - sum} MP!`);
    //   } else {
    //     currentHero.MP = sum;
    //     console.log(`${name} recharged for ${recharge} MP!`);
    //   }
    // } else if (command === "Heal") {
    //   let heal = +token[0];
    //   sum = currentHero.HP + heal;
    //   if (sum > 100) {
    //     currentHero.HP = 100;
    //     sum -= 100;
    //     console.log(`${name} healed for ${heal - sum} HP!`);
    //   } else {
    //     currentHero.HP = sum;
    //     console.log(`${name} healed for ${heal} HP!`);
    //   }
    // }

    // Втори вариант

    switch (command) {
      case "CastSpell":
        let manaNeeded = +token[0];
        if (currentHero.MP >= manaNeeded) {
          currentHero.MP -= manaNeeded;
          console.log(
            `${name} has successfully cast ${token[1]} and now has ${currentHero.MP} MP!`
          );
        } else {
          console.log(`${name} does not have enough MP to cast ${token[1]}!`);
        }
        break;
      case "TakeDamage":
        let damage = token[0];
        currentHero.HP -= damage;
        if (currentHero.HP > 0) {
          console.log(
            `${name} was hit for ${damage} HP by ${token[1]} and now has ${currentHero.HP} HP left!`
          );
        } else {
          console.log(`${name} has been killed by ${token[1]}!`);
          heroes.splice(heroes.indexOf(currentHero), 1);
        }
        break;
      case "Recharge":
        let recharge = +token[0];
        sum = currentHero.MP + recharge;
        if (sum > 200) {
          currentHero.MP = 200;
          sum -= 200;
          console.log(`${name} recharged for ${recharge - sum} MP!`);
        } else {
          currentHero.MP = sum;
          console.log(`${name} recharged for ${recharge} MP!`);
        }
        break;
      case "Heal":
        let heal = +token[0];
        sum = currentHero.HP + heal;
        if (sum > 100) {
          currentHero.HP = 100;
          sum -= 100;
          console.log(`${name} healed for ${heal - sum} HP!`);
        } else {
          currentHero.HP = sum;
          console.log(`${name} healed for ${heal} HP!`);
        }
        break;
    }
    //line = input.shift();
  }
  for (const line of heroes) {
    console.log(`${line.name}
  HP: ${line.HP}
  MP: ${line.MP}`);
  }
}
heroesOfCodeAndLogicVII([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
