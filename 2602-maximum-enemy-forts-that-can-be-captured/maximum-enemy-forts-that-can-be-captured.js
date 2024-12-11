/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
        let maxCapture = 0;
    
    // For each position in array
    for (let i = 0; i < forts.length; i++) {
        // If we find our fort or empty space
        if (forts[i] === 1 || forts[i] === -1) {
            // Look for opposite (-1 if we found 1, or 1 if we found -1)
            for (let j = i + 1; j < forts.length; j++) {
                // If we find opposite type
                if (forts[j] === -forts[i]) {
                    // Count enemies between i and j
                    let enemies = 0;
                    let valid = true;
                    
                    // Check all positions between are enemies
                    for (let k = i + 1; k < j; k++) {
                        if (forts[k] !== 0) {
                            valid = false;
                            break;
                        }
                        enemies++;
                    }
                    
                    // Update max if path is valid
                    if (valid) {
                        maxCapture = Math.max(maxCapture, enemies);
                    }
                }
            }
        }
    }
    
    return maxCapture;
};