// 左滑窗口方法
// 后面可以详细看
function lengthOfLongestSubstring(str) {
    let left = 0
    let right = 0
    let maxLength = 0

    const charSet = new Set()
    while(right < str.length) {
        if (!charSet.has(str[right])) {
            charSet.add(str[right])
            right++
            maxLength = Math.max(maxLength, right - left)
        } else {
            charSet.delete(str[left])
            left++
        }
    }
    return maxLength
}