/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    const intersection = []
    let pointer1 = 0
    let pointer2 = 0
    let pointer3 = 0

    while (pointer1 < arr1.length && pointer2 < arr2.length && pointer3 < arr3.length) {
        const num1 = arr1[pointer1]
        const num2 = arr2[pointer2]
        const num3 = arr3[pointer3]

        if (num1 === num2 && num2 === num3) {
            intersection.push(num1)
            pointer1++
            pointer2++
            pointer3++
        } else {
            const minNum = Math.min(num1, num2, num3)

            if (num1 === minNum) pointer1++
            if (num2 === minNum) pointer2++
            if (num3 === minNum) pointer3++
        }
    }

    return intersection.sort((a, b) => a - b)
};