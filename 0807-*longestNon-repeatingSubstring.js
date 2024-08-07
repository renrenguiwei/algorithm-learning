// 左滑窗口方法
// 后面可以详细看
// 思路图：https://cloud.send2boox.com/658bab3ebf84c456f0b970ac/share/%E7%AC%94%E8%AE%B01_2.png?OSSAccessKeyId=LTAI4GLDZynkeejzJembJiS6&Expires=1723129366&Signature=HXFGqgFkkXgXS3%2FQBhZ1Fr6QuoQ%3D
function lengthOfLongestSubstring(str) {
    let left = 0
    let right = 0
    let maxLength = 0
    let maxStr = ''

    const charSet = new Set()
    while(right < str.length) {
        if (!charSet.has(str[right])) {
            charSet.add(str[right])
            right++
            maxLength = Math.max(maxLength, right - left)
            maxStr = str.slice(left, right)
        } else {
            charSet.delete(str[left])
            left++
        }
    }
    return { maxLength, maxStr }
}