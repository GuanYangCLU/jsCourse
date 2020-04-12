// java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap();
        for (int i=0;i<nums.length;i++) {
            if (!map.containsKey(nums[i])) {
                map.put(target - nums[i], i);
            } else {
                int rs[] = new int[]{map.get(nums[i]), i};
                return(rs);
            }
        }
        return(new int[]{});
    }
}

// python
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        dict = {i: (target - nums[i]) for i in range(len(nums))}
        for i in range(len(nums)):
            if (dict[i] in nums):
                if (nums.index(dict[i]) != i):
                    return sorted([i,nums.index(dict[i])])
