function movingTarget(input) {
    let target = input[0].split(` `).map(x => Number(x))
    let index = 1
    let command = input[index]
    index++

    while (command !== "End") {
        let token = command.split(` `)
        let location = Number(token[1])
        let task = Number(token[2])
        switch (token[0]) {
            case "Shoot":
                if (location >= 0 && location < target.length) {
                    target[location] -= task
                    if (target[location] <= 0) {
                        target.splice(location, 1)
                    }
                }
                
                break;
            case "Add":
                if (location >= 0 && location < target.length) {
                    target.splice(location, 0, task)
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                let start = location - task
                let end = task * 2 + 1
                if (location - task >= 0 && task + location < target.length) {
                    target.splice(start, end)
                } else {
                    console.log( "Strike missed!" );
                }
                break;

        }
    command = input[index]
    index++
    }
     console.log(target.join(`|`));

    
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])