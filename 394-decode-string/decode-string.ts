function decodeString(s: string): string {
    const countStack: number[] = []
    const stringStack: string[] = []

    let currentNum: number = 0
    let currentString: string = ''

    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
            currentNum = currentNum * 10 + parseInt(ch)
        } else if (ch === '[') {
            countStack.push(currentNum)
            stringStack.push(currentString)

            currentNum = 0
            currentString = ''
        } else if (ch === ']') {
            const repeatTimes: number = countStack.pop()
            const previousString: string = stringStack.pop()

            currentString = previousString + currentString.repeat(repeatTimes)
        } else {
            currentString += ch
        }
    }

    return currentString
};