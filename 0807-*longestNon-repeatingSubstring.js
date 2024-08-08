// 左滑窗口方法
// 后面可以详细看
// 思路图：https://cloud.send2boox.com/658bab3ebf84c456f0b970ac/share/%E7%AC%94%E8%AE%B01_3.png?OSSAccessKeyId=LTAI4GLDZynkeejzJembJiS6&Expires=1723163037&Signature=3HMN4HeqBIxTmoUome6W8b5ZiR4%3D
function lengthOfLongestSubstring(str) {
    let left = 0
    let right = 0
    let maxLength = 0
    let maxStr = ''

    const charSet = new Set()
    while(right < str.length) {

        if (!charSet.has(str[right])) {
            charSet.add(str[right++])
            if (right - left > maxLength) {
                maxStr = str.substring(left, right)
            }
            maxLength = Math.max(maxLength, right - left)
        } else {
            charSet.delete(str[left++])
        }
        console.log(maxStr, left, right, charSet.values())
    }

    return { maxLength, maxStr }
}

console.log(lengthOfLongestSubstring('121'))