function rotateArray(array) {
    let arrayLenght = array.length
    let rotations = Number(array[arrayLenght - 1])
    array.pop()
    for (let i = 0; i < rotations; i++) {
        let currentElement = array[arrayLenght - 2]
        array.pop()
        array.unshift(currentElement)
    }
    console.log(array.join(` `));
}
rotateArray(['1', '2', '3', '4', '2'])