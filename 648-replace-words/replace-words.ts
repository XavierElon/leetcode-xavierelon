function replaceWords(dictionary: string[], sentence: string): string {
    const newSentence = sentence.split(' ')

    for (let j = 0; j < dictionary.length; j++) {
        for (let i = 0; i < newSentence.length; i++) {
            if (newSentence[i].startsWith(dictionary[j])) {
                newSentence[i] = dictionary[j]
            }
        }
    }

    return newSentence.join(' ')
};