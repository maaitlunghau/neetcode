class Solution {
    public boolean hasDuplicate(int[] nums) {
        Arrays.sort(nums);

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != nums[i + 1]) 
                return false;
            else
                return true;
        }
    }
}