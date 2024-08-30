function areNumbersAscending(s: string): boolean {
    let tokens = s.split(' ')
    let previousNumber = -1

    for (const token of tokens) {
        const num = parseInt(token)

        if (!isNaN(num)) {
            if (num <= previousNumber) {
                return false
            }
            previousNumber = num
        }
    }
    return true
};