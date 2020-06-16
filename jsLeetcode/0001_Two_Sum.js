// JavaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    try {
        nums.reduce((accum, item, idx) => {
            if (item in accum) throw [accum[item], idx];
            return { ...accum, [target - item]: idx };
        }, {});
    } catch(err) {
        return err;
    }
    
    return [];
};

// Java
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

// Python Good
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        dic = {}
        for i, n in enumerate(nums):
            if (n in dic):
                return [dic[n], i]
            dic[target - n] = i

// Python Naive
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
