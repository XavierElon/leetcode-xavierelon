/**
 * @param {number[][]} nums
 * @return {number}
 */
    var numberOfPoints = function(nums) {
        let line = new Array(102).fill(0);
        let points_on_line = 0;

        for (let i = 0; i < nums.length; i++) {
            let s = nums[i][0];
            let e = nums[i][1];
            line[s] += 1;
            line[e + 1] -= 1;
        }

        for (let i = 1; i < 102; i++) {
            line[i] += line[i - 1];
            if (line[i] != 0) {
                points_on_line += 1;
            }
        }

        return points_on_line;
    };