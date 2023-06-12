function sorting(array) {
    let sorted = array.slice().sort((a, b) => b-a)
    let arrayLength = array.length
    let result = []
    for (let index = 1; index < arrayLength ; index++) {
        let firstNum = sorted.shift()
        let lastNum = sorted.pop()
        result.push(firstNum)
        result.push(lastNum)
        
    }
    console.log(result.join(` `));
}
sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94])