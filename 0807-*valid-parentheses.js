// 有效的括号
// todo: 回文数据
/**
 * @param {string} s
 * @return {boolean}
 */
// 简化版本单纯()[]{}
/*var isValid = function (s) {
    const len = s.length
    if (len % 2 !== 0) return false
    const mapS = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let point = 0
    let status = true
    while (point < len) {

        const left = s[point]
        const right = mapS[s[point + 1]]

        if (left === right) {
            point += 2
        } else {
            status = false
            break
        }
    }
    return status
}*/;

// 复杂版本 {[]}(){()}([])
var isValid = function (s) {
    const sMap = {
        '(': ')',
        ')': '(',

        '[': ']',
        ']': '[',

        '{': '}',
        '}': '{',
    }

    let left = 0
    let right = 0
    let charSet = new Set()
    let status = true
    let strBlock

    while(right < s.length) {
        // right括号直接出现，pass
        if ([')', ']', '}'].includes(s[right]) && !charSet.has(sMap[s[right]])) {
            status = false
            break
        }
        if (!charSet.has(sMap[s[right]])) {
            charSet.add(s[right])
            right++
            if (right === s.length) { // （（：add完超长，直接pass
                status = false
                break
            }
        } else {
            strBlock = s.substr(left, (right-left)*2)
            if ((right-left)*2 + left > right) {
                status = false
                break
            }
            if (!isPalindrome(strBlock)) {
                status = false
                break
            } else {
                left = left + (right - left) * 2
                right = left
                charSet.clear()
            }
        }
    }

    return status
}

function isPalindrome(str) {
    const num1 = convertToNum(str)
    const num2 = num1.split('').reverse().join('')
    return num1 === num2
}

function convertToNum(s) {
    s = s.replace(/\(/g, '1')
    s = s.replace(/\)/g, '1')
    s = s.replace(/\[/g, '2')
    s = s.replace(/\]/g, '2')
    s = s.replace(/\{/g, '3')
    s = s.replace(/\}/g, '3')
    return s
}


// isValid('{[]}(){()}([])')
isValid("(){}}{")