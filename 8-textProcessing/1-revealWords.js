function revealWords(words, text) {
    let wordsToReplace = words.split(`, `)
    // let textToReplace = text.split(` `)
    // for (const word of wordsToReplace) {
    //     let wordLength = word.length
    //     for (const hiddenWords of textToReplace) {
    //         let hiddenWord = hiddenWords.length

    //         if (hiddenWord === wordLength && hiddenWords === ('*'.repeat(hiddenWord))) {
    //             text = text.replace(hiddenWords, word)
    //             break
    //         }

    //     }
    // }
    for (const iterator of wordsToReplace) {
        let template = '*'.repeat(iterator.length)
        text = text.replace(template, iterator)
    }
    console.log(text);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')