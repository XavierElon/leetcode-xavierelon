function nextGreaterElement(n: number): number {
    const digits: string[] = n.toString().split('')
    const length: number = digits.length

    let pivotIndex: number = length - 2
    while (pivotIndex >= 0 && digits[pivotIndex] >= digits[pivotIndex + 1]) {
        pivotIndex--
    }

    if (pivotIndex < 0) return -1

    let swapIndex: number = length - 1
    while (digits[swapIndex] <= digits[pivotIndex]) {
        swapIndex--
    }

    [digits[pivotIndex], digits[swapIndex]] = [digits[swapIndex], digits[pivotIndex]]

    const result: string = digits.slice(0, pivotIndex + 1).concat(digits.slice(pivotIndex + 1).reverse()).join('')

    const nextGreaterNum: number = parseInt(result, 10)

    return nextGreaterNum <= 2 ** 31 - 1 ? nextGreaterNum : -1
};