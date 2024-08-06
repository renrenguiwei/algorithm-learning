/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    // let len0 = 0
    // let len1 = 0
    // let len2 = 0

    // nums.forEach(num => {
    //     if (num ===0) len0++ 
    //     if (num ===1) len1++
    //     if (num ===2) len2++

    // })
    // console.log(len0, len1, len2)

    // let i = 0
    // for(let j = 0; j < len0; j++) nums[i++] = 0
    // console.log(nums)
    // for(let j = 0; j < len1; j++) nums[i++] = 1
    // console.log(nums)
    // for(let j = 0; j < len2; j++) nums[i++] = 2
    // console.log(nums)

    // 单指针 0挪到头，1挪到头后面，剩下是2
    let ptr = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            const temp = nums[i]
            nums[i] = nums[ptr]
            nums[ptr] = temp
            ptr++
        }
    }

    // for (let i = ptr; i < nums.length; i++) {
    //     if (nums[i] === 1) {
    //         const temp = nums[i]
    //         nums[i] = nums[ptr]
    //         nums[ptr] = temp
    //         ptr++
    //     }
    // }

    console.log(nums)

    // 双指针 0挪到头、2挪尾部
    let ptr_tail = nums.length -1
    for (let i = nums.length -1; i >= 0; i--) {
        if (nums[i] === 2) {
            const temp = nums[i]
            nums[i] = nums[ptr_tail]
            nums[ptr_tail] = temp
            ptr_tail--
        }
    }


    // 冒泡排序
}

sortColors([2,1])