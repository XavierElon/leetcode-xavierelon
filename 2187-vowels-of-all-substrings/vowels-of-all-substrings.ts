function countVowels(word: string): number {
    let p = 0;
    let ts: number[] = [];
    let n = word.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
      let numStrings = (n - i) + (p - i);
      ts.push(numStrings);
      p = numStrings;
    }

    for (let i = 0; i < n; i++) {
      if ('aeiou'.includes(word[i])) {
        total += ts[i];
      }
    }

    return total;
};