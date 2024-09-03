function minimumSum(num: number): number {
    const digits = Array.from(num.toString()).map(Number)

    digits.sort((a, b) => a - b)
    
    return (digits[0] * 10 + digits[2]) + (digits[1] * 10 + digits[3])
};