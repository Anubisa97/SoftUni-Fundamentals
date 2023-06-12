function houseParty(array){
    let partyList = []
    for (const input of array) {
        let command = input.split(` `)
        let name = command[0]
        if (command[2] === "going!") {
            if (!partyList.includes(name)) {
                partyList.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (partyList.includes(name)) {
                let position = partyList.indexOf(name)
                partyList.splice(position, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(partyList.join(`\n`));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])