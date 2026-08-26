class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let d = i + 1; d <= nums.length; d++) {
                if (nums[i] === nums[d]) return true
            }
        }
        return false
    }
}
