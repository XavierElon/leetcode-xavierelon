/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const digits = [],
          letters = []
    
    for (const log of logs) {
        if (isFinite(log.split(' ')[1])) digits.push(log)  // digit log
        else letters.push(log)  // letter log
    }
    
	// Sorting the letters log based on condition of lexio order without and with key (example: 'let1')
    letters.sort((a,b) => {
        let l1 = a.split(' ').slice(1).join(' '),
            l2 = b.split(' ').slice(1).join(' ')
        
        if (l1 === l2) return a > b ? 1 : -1
        return l1 > l2 ? 1 : -1
    })
    
    return [...letters, ...digits]
};