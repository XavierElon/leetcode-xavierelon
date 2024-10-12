function search(nums: number[], target: number): boolean {
        let left: number = 0
        let right: number = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((right + left) / 2); // lower mid
        if (nums[mid] === target) return true
        if (nums[mid] === nums[left]) left++
        if (nums[mid] == nums[right]) right--; // the only difference between Q.33
        else if (nums[mid] < nums[right]) { // right part sorted
            if (target > nums[mid] && target <= nums[right]) left = mid + 1;
            else right = mid
        } else{
            if (target > nums[mid] || target < nums[left]) left = mid + 1;
            else right = mid;
        } 
    }
    return nums[left]==target;
};