const gcd = (a: number, b: number) => {
    return b === 0 ? a : gcd(b, a % b)
}

function findGCD(nums: number[]): number {
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    return gcd(min, max)
};