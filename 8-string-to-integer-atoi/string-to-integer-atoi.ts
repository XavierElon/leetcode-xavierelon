function myAtoi(s: string): number {
    let i = 0 
    let isNegative = false
    while(i < s.length && s[i] === ' ') { 
        i++;
    } 

    if(s[i] === '-' || s[i] === '+') { 
        isNegative = s[i] === '-' 
        i++
    }

    if(i<s.length && !s[i].match(/[0-9]/)) { 
        return 0;
    } 

    let res = ''

    while(i < s.length && s[i].match(/[0-9]/)) { 
        res += s[i] 
        i++
    } 

    let numRes = isNegative ? +res * -1: +res
    if(numRes <= -2147483648) { 
        return -2147483648
    } else if(numRes >= 2147483648) { 
        return 2147483647
    } 

    return numRes
};