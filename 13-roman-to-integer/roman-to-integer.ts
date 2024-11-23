function romanToInt(s: string): number {
       const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
       
       let sum = 0
       
       for (let i = 0; i < s.length; i++) {
           if (i > 0 && s.charAt(i-1) === 'I' && (s.charAt(i) === 'V' || s.charAt(i) === 'X')) {
               sum -= 2
           } else if (i > 0 && s.charAt(i-1) === 'X' && (s.charAt(i) === 'L' || s.charAt(i) === 'C')) {
               sum -= 20
           } else if (i > 0 && s.charAt(i-1) === 'C' && (s.charAt(i) === 'D' || s.charAt(i) === 'M')) {
               sum -= 200
           }       
           sum += map[s.charAt(i)]
       }
    return sum
};