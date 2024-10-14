function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    let result = [];
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 1;
    let d = 0;
    let r = rStart, c = cStart;
    result.push([r, c]);

    while (result.length < rows * cols) {
        for (let i = 0; i < 2; ++i) {
            for (let j = 0; j < steps; ++j) {
                r += directions[d][0];
                c += directions[d][1];
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    result.push([r, c]);
                }
            }
            d = (d + 1) % 4;
        }
        ++steps;
    }

    return result;
};