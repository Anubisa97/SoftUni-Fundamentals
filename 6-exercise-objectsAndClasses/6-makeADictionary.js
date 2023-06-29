function makeADictionary(input) {
    let dictionary = {}
    for (let index = 0; index < input.length; index++) {
        let term = JSON.parse(input[index])
        let objKey = Object.keys(term)[0]
       // let objValue = term[Object.keys(term)[0]]
        if (objKey in dictionary) {
            delete dictionary.objKey
        } 
            dictionary[objKey] = term    
    }
    Object.keys(dictionary).sort().forEach(function(v, i) {
        console.log(v, dictionary[v]);
     });
    // dictionary.forEach(element => {
    //     console.log(`Term: ${element} => Definition: ${dictionary[element]}`);
    // });
    for (const term in dictionary) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}
makeADictionary([
  '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
  '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
  '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
  '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
  '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
  
]);
