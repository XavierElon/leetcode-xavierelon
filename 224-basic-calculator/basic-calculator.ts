function calculate(s: string): number {
    const stack: number[] = []
    let currentNumber: number = 0
    let result: number = 0
    let sign: number = 1
    console.log(isNaN(Number(' ')))

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        console.log('number = ' + char)
        console.log(!isNaN(Number(char)))
        if (!isNaN(Number(char)) && char !== ' ') {
            currentNumber = currentNumber * 10 + (char.charCodeAt(0) - '0'.charCodeAt(0))
        } else if (char === '+') {
            result += sign * currentNumber
            currentNumber = 0
            sign = 1
        } else if (char === '-') {
            result += sign * currentNumber
            currentNumber = 0
            sign = -1
        } else if (char === '(') {
            stack.push(result)
            stack.push(sign)
            result = 0
            sign = 1
        } else if (char === ')') {
            result += sign * currentNumber
            currentNumber = 0
            result *= stack.pop()
            result += stack.pop()
        }
    }

    result += sign * currentNumber
    return result
};