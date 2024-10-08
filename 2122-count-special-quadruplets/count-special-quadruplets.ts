function countQuadruplets(nums: number[]): number {
    	let count = 0;

	for (let a = 0; a < nums.length - 3; a++) {
		for (let b = a + 1; b < nums.length - 2; b++) {
			for (let c = b + 1; c < nums.length - 1; c++) {
				const sum = nums[a] + nums[b] + nums[c];
				const find = nums.slice(c + 1).filter(num => num === sum);

				count += find.length; 
			}
		}
	}

	return count;
};