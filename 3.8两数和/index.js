/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const lens = nums.length
    const twoIndex = []
    for (let j=0; j<lens-1; j++){
        for (let i=j+1; i<lens; i++) {
            if (nums[j] + nums[i] === target) {
                twoIndex.push(j, i)
                break
            }
        }
        if (twoIndex.length > 0) break
    }
    return twoIndex
};

console.log(twoSum([2,7,11,15], 9))