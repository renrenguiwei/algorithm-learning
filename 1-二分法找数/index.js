/**
 * 背景：二分法
 *      1. 在一个有序数组中找到指定"数字"下标
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