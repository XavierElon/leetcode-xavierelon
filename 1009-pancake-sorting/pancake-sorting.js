/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    const result = [];
    const reversePancake = (start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start += 1;
            end -= 1;
        }
    };

    for (let n = arr.length; n > 0; n--) {
        const target = arr.findIndex(pancake => pancake === n);

        reversePancake(0, target);
        result.push(target + 1);
        reversePancake(0, n - 1);
        result.push(n);
    }
    return result;
};