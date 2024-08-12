/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0
    let maxLength = 0;
    let maxStr = ''
    while(start < s.length) {
        const startNode = s[start]
        end = s.indexOf(startNode, end === 0 ? start+1 : end + 1)
        if (end > -1) {
            const snippet = s.substring(start, end+1)
            if (isPalindrome(snippet)) {
                if (snippet.length >= maxLength) {
                    maxLength = snippet.length
                    maxStr = snippet
                }
            }
        } else {
            start++
            end = 0
        }
    }
    return maxStr || s[s.length - 1]
};

function isPalindrome(str) {
    const str2 = str.split('').reverse().join('')
    return str === str2
}

console.log(longestPalindrome('ccc'))