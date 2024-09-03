function minimumSum(num: number): number {
    const digits = num.toString().split('').map(d => parseInt(d))
    digits.sort((a, b) => a - b)
    return parseInt(digits[0] + '' + digits[2]) + parseInt(digits[1] + '' + digits[3])
};