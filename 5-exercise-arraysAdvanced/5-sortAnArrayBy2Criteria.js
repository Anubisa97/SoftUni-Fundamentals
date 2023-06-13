function sortAnArrayBy2Criteria(array) {
    let sort = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        } else {
            return a.localeCompare(b)
        }
    })
    console.log(sort.join(`\n`));
}
sortAnArrayBy2Criteria(['alpha',
'beta',
'gamma'])