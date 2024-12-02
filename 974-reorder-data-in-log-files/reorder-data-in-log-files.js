/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const textLogs = []
    const digitLogs = []

    for (const log of logs) {
        const [id, ...rest] = log.split(' ')
        if (isNaN(Number(rest[0]))) {
            textLogs.push([id, rest.join(' ')])
        } else {
            digitLogs.push(log)
        }
    }

    textLogs.sort((a, b) => {
        if (a[1] < b[1]) return -1
        if (a[1] > b[1]) return 1
        if (a[1] === b[1]) {
            if (a[0] < b[0]) return -1
            if (a[0] > b[0]) return 1
            return 0
        }
        return 0
    })

    const texts = textLogs.map(log => log.join(' '))
    return [...texts, ...digitLogs]
};