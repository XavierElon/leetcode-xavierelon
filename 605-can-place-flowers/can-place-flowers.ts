function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count: number = 0
    const length: number = flowerbed.length-1

    for (let i = 0; i <= length; i++) {
        if (flowerbed[i] === 0 && ((i === 0 || flowerbed[i-1] === 0) && (i === length || flowerbed[i+1] === 0))) {
            flowerbed[i] = 1
            count++

            if (count >= n) {
                return true
            }
         }
    }
    return count >= n
};