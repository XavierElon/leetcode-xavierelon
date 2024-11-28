function numberOfSteps(num: number): number {
    let steps: number = 0

    while (num !== 0) {
        if (num % 2 === 0) {
            num /= 2
        } else {
            num--
        }
        steps++
    }

    return steps
};