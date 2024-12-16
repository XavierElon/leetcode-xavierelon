/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (a) {
	const n = a.length;
	const ps = new Array(n).fill(0);
	for (let i = 0, s = 0; i < n; i++) {
		ps[i] = s += a[i];
	}
	const ss = new Array(n).fill(0);
	for (let i = n - 1, s = 0; i >= 0; i--) {
		ss[i] = s += a[i];
	}
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (a[i] === 0) {
			const l = ps[i - 1] || 0;
			const r = ss[i + 1] || 0;
			const diff = Math.abs(l - r);
			if (diff === 0) {
				count += 2;
			} else if (diff === 1) {
				count += 1;
			}
		}
	}
	return count;
};