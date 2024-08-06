/**
 * 应用场景：webpack代码打包后，对注释简化
 */

// 输入: source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]
// 输出: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
function removeComments(source: string[]): string[] {
    const symbol = '_divide_'
    let sourceStr = source.join(symbol)
    while (sourceStr.indexOf('//') > -1 || sourceStr.indexOf('/*') > -1) {
        const _matchSlashIndex = sourceStr.indexOf('//')
        const _matchStarIndex = sourceStr.indexOf('/*')
        // 匹配/*
        if (_matchSlashIndex > _matchStarIndex) {
            const start = sourceStr.substring(0, _matchStarIndex)

            const endIndex = sourceStr.indexOf('*/', _matchStarIndex)
            const end = sourceStr.substring(endIndex + 2)

            if (sourceStr.substring(_matchStarIndex, endIndex).indexOf(symbol)) {
                sourceStr = start + symbol + end
            } else {
                sourceStr = start + end
            }
        // 匹配//
        } else {
            const start = sourceStr.substring(0, _matchSlashIndex)

            const endIndex = sourceStr.indexOf(symbol, _matchSlashIndex) // 可能是最后
            const end = endIndex > -1 ? sourceStr.substring(endIndex) : ''
            sourceStr = start + end
        }
    }

    return sourceStr.split(symbol)
}

const source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]
console.log(removeComments(source))




























