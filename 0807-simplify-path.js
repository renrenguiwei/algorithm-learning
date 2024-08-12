/**
 * @param {string} path
 * @return {string}
 * 1. 利用数组栈的思想
 * https://leetcode.cn/problems/simplify-path/solutions/374610/tu-jie-miao-dong-by-huxiaocheng-2/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days&role=all
 * 2. 利用路由api
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