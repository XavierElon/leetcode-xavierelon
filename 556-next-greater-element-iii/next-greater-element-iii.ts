function nextGreaterElement(n: number): number {
    const digits: string[] = n.toString().split('')
    const length: number = digits.length

    let i: number = length - 2
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--
    }

    if (i < 0) return -1

    let j: number = length - 1
    while (digits[j] <= digits[i]) {
        j--
    }

    [digits[i], digits[j]] = [digits[j], digits[i]]

    const result: string = digits.slice(0, i + 1).concat(digits.slice(i+1).reverse()).join('')
    const nextGreaterNum: number = parseInt(result, 10)

    return nextGreaterNum <= 2 ** 31 - 1 ? nextGreaterNum : -1
};