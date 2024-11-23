function intToRoman(num: number): string {
    const values: number[] = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    const symbols: string[] = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    let str: string = ''

    for (let i = values.length - 1; i >=0 && num > 0; i--) {
        while (num >= values[i]) {
            num -= values[i]
            str += symbols[i]
        }
    }  
    return str
};