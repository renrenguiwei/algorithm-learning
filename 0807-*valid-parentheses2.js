// 利用又指针，寻找闭合括号
/*var isValid = function (s) {
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
}*/
// isValid(']')

// 利用replace替换
var isValid = function (s) {
    while (s.indexOf('()') > -1 || s.indexOf('[]') > -1 || s.indexOf('{}') > -1) {
        s = s.replace(/\[]/g, '')
        s = s.replace(/\{}/g, '')
        s = s.replace(/\(\)/g, '')
        console.log(s)
    }
    return s.length === 0
}

isValid('()[]{}')
