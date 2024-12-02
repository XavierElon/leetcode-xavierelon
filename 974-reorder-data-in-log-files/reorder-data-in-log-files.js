/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letterLogs = []
    const digitLogs = []

    const isDigit = (char) => /\d/.test(char)

    for (const log of logs) {
        const spaceIndex = log.indexOf(' ')
        const identifier = log.substring(0, spaceIndex)
        const content = log.substring(spaceIndex + 1)

        if (isDigit(content[0])) {
            digitLogs.push(log)
        } else {
            letterLogs.push(log)
        }
    }

    letterLogs.sort((logA, logB) => {
        const spaceIndexA = logA.indexOf(' ')
        const idA = logA.substring(0, spaceIndexA)
        const contentA = logA.substring(spaceIndexA + 1)

        const spaceIndexB = logB.indexOf(' ')
        const idB = logB.substring(0, spaceIndexB)
        const contentB = logB.substring(spaceIndexB + 1)

        const contentComparison = contentA.localeCompare(contentB)

        if (contentComparison !== 0) {
            return contentComparison
        } else {
            return idA.localeCompare(idB)
        }
    })

    return [...letterLogs, ...digitLogs]
};