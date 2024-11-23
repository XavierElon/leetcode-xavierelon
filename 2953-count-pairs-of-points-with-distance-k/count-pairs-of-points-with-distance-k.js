var countPairs = function (coordinates, k) {
	/*
        for  [x1,y1] [x2,y2]
        find  x1 ^ x2 + y1 ^ y2 = k
        so if    a    +    b    = k
        =>    x1 ^ x2 = a   and   y1 ^ y2 = b
        =>    x1 ^ a  = x2  and   y1 ^ b  = y2
        so find how many [x2,y2] that are equal to [x1 ^ a, y1 ^ b], where  a + b = k
    */
	let sum = 0;
	const dp = {};
	for (const [x1, y1] of coordinates) {
		for (let a = 0; a <= k; a++) {
			// get a+b=k
			const b = k - a;
			// get [x2,y2] = [x1 ^ a, y1 ^ b]
			const x2 = x1 ^ a;
			const y2 = y1 ^ b;
			sum += dp[x2]?.[y2] || 0;
		}
		dp[x1] = dp[x1] || {};
		dp[x1][y1] = dp[x1][y1] || 0;
		dp[x1][y1]++;
	}
	return sum;
};