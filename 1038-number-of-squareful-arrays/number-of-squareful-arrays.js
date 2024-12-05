/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquarefulPerms = function(nums) {
    let res = [];

    nums.sort((a, b) => a - b);
    let count = 0;

    var permute = function(i = 0) {
        if(i == nums.length) {
            res.push([...nums]);
            count++;
            return
        }

        let set = new Set();

        for(let j = i; j < nums.length; j++) {
            if(!set.has(nums[j])) {
                
            set.add(nums[j]);
            [nums[i], nums[j]] = [nums[j], nums[i]];

            if(i == 0 || isSquare(nums[i - 1], nums[i])) {
                permute(i + 1);
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
    
    permute();
    function isSquare(a, b) {
        const x = a + b;
        const sqrt = Math.sqrt(x);
        return (sqrt - Math.floor(sqrt)) === 0;
    }
    return count;
};