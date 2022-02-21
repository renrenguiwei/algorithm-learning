/**
 * 背景：二分法
 *      1. 在一个有序数组中找到指定"数字"下标
 *      
 *      知识点复习：
 *      1. Math.floor(3.141592654) // 3 下
 *      2. Math.ceil(3.141592654) // 4  上
 *      3. Math.round(3.141592654) // 3 四舍五入
 *      4. parseInt('1.001') // 1 取整
 *      5. (5.56789).toFixed(2) // "5.57"四舍五入小数点后2位，转换了字符串
 *      
 */

function binary_search(list = [], item) {
    let low = 0
    let high = list.length - 1
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2) // 向下取整
        let guess = list[mid]

        console.log('low:'+ low, 'mid:'+ mid, 'high:'+ high, '猜想值：:'+ guess)
        
        if (guess === item) {
            return mid
        } else if (guess > item ) {
            high = mid - 1
        } else if (guess < item) {
            low = mid + 1
        }
    }
    return null
}

const item = 10
const binaryArr = []
for (let i = 0; i < 5; i++) {
    binaryArr.push(i+1)
}
const res = binary_search(binaryArr, item)
console.log(binaryArr, item, res)