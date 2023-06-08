function nonDecreasingSubset(array) {
    let biggestNumber = 0
    let subset = []
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= biggestNumber) {
            subset.push(array[index])
            biggestNumber = array[index]
        }
        
    }
    console.log(subset.join(` `));
}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])