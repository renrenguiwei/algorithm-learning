// 利用又指针，寻找闭合括号
var isValid = function (s) {
    const sMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let dot = 0
    while (dot < s.length) {
        if (s.length % 2 === 1) {
            break
        }
        if (sMap[s[dot]] === s[dot + 1]) {
            s = s.slice(0, dot) + s.slice(dot + 2)
            dot = 0
        } else {
            dot++
        }
    }
    return s.length === 0
}
isValid(']')

