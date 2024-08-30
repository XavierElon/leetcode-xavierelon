function areNumbersAscending(s: string): boolean {
    const tokens: string[] = s.split(' ')
    let previousNumber: number = -1

    for (const token of tokens) {
        const num: number = parseInt(token)

        if (!isNaN(num)) {
            if (num <= previousNumber) return false

            previousNumber = num
        }
    }

    return true
};