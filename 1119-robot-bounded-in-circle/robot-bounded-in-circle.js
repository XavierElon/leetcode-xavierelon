/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) { 
    let x = 0, y = 0;
    // DIRECTIONS[i] = [x,y], from north to west
    let DIRECTIONS = [[0,1],[1,0],[0,-1],[-1,0]];
    let i = 0;
    for (let j = 0; j < instructions.length; j++) {
        if (instructions[j] === "R") {
            i = (i + 1) % 4;
        } else if (instructions[j] === "L") {
            i = (i + 3) % 4; 
        } else {
            x += DIRECTIONS[i][0];
            y += DIRECTIONS[i][1];
        }
    }
    return (x === 0 && y === 0) || i > 0;
    // T.C: O(N)
    // S.C: O(1)
};