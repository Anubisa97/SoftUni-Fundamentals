function softUniReception(input) {
    let [employeOne, employeTwo, employeThree, studentsCount] = input.map(x => Number(x))
    let totalAnswers = employeOne + employeTwo + employeThree
    let hours = 0

    while (studentsCount > 0) {
        studentsCount -= totalAnswers
        hours++
        if (hours % 4 === 0) {
            hours++
        }
    }

    console.log(`Time needed: ${hours}h.`);
    
}
softUniReception(['5','6','4','20'])
softUniReception(['1','2','3','45'])
softUniReception(['3','2','5','40'])