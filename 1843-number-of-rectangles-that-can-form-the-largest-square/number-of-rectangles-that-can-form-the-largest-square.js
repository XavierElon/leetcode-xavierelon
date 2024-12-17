/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let max = 0;
    let count = 0;
    
    for(let i = 0; i < rectangles.length; i++) {
        let minSide = Math.min(rectangles[i][0], rectangles[i][1])
        
        if(minSide > max) {
            count = 0
            max = minSide
        } 
        
        if(minSide === max) count++
    }
    
    return count
};