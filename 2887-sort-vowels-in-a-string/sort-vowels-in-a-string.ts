function sortVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    // Collect all the vowels in the string
    let vowelList: string[] = [];
    for (let char of s) {
        if (vowels.has(char)) {
            vowelList.push(char);
        }
    }

    // Sort the vowels by their ASCII values
    vowelList.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    
    // Rebuild the string, replacing vowels with sorted vowels
    let result = '';
    let vowelIndex = 0;
    
    for (let char of s) {
        if (vowels.has(char)) {
            result += vowelList[vowelIndex];
            vowelIndex++;
        } else {
            result += char;
        }
    }
    
    return result;
};