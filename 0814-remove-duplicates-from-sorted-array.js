/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] === nums[j+1]) {
                nums.splice(j+1, 1)
                j--
            }
        }
    }
}