/**
 * @param {string} path
 * @return {string}
 * 利用栈的思想
 */

var simplifyPath = function(path) {
    // /c/../a/../b/c/../../../
    // ['', 'c', '..', 'a', '..', 'b', 'c', '..', '..', '..']
    const pathArray = path.split('/')
    const stack = []
    pathArray.forEach(node => {
        if (['', '.'].includes(node)) {     // 不做操作

        } else if (['..'].includes(node)) { // 弹出尾部节点
            stack.pop()
        } else {
            stack.push(node)                // 推进节点
        }
    })

    return '/' + stack.join('/')
}