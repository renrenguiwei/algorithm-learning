function findMedianSortedArrays(nums1, nums2) {
    const newNums = [...nums1, ...nums2].sort((a, b) => a - b)
    const len = newNums.length
    if (len === 1) return newNums[0]

    let targetNum
    if (len%2 === 1) {
        targetNum = newNums[(len-1)/2]
    } else {
        targetNum = (newNums[len/2] + newNums[(len/2)-1])/2
    }
    return targetNum
}

findMedianSortedArrays([-2, -1], [3])