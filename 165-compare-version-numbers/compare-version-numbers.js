/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const parts1 = version1.split('.').map(part => parseInt(part))
    const parts2 = version2.split('.').map(part => parseInt(part))

    const maxLength = Math.max(parts1.length, parts2.length)

    for (let i = 0; i < maxLength; i++) {
        const num1 = i < parts1.length ? parts1[i] : 0
        const num2 = i < parts2.length ? parts2[i] : 0

        if (num1 > num2) {
            return 1
        }
        if (num2 > num1) {
            return -1
        }
    }

    return 0
};