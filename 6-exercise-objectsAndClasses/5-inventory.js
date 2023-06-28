function inventory(input) {
    heroList = []
    input.forEach(element => {
        let [name, level, items] = element.split(` / `)
        let hero = {
            name: name,
            level: Number(level),
            items: items
        }
        heroList.push(hero)
    });
    heroList.sort((a, b) => a.level - b.level)

    heroList.forEach(element => {
            console.log(`Hero: ${element.name}`);
            console.log(`level => ${element.level}`);
            console.log(`Items => ${element.items}`);
    })
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])


//     Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}