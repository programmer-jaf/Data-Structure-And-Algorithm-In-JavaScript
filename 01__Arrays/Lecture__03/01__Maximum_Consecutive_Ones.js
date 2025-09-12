// LeetCode Link --> https://leetcode.com/problems/max-consecutive-ones/description/

// Solution
function maxConsecutiveOnes(nums) {
  let max = 0;
  let count = 0;
  for(let i = 0;i<nums.length;i++){
      if(nums[i]===1){
          count++;
          if(count>max){
              max = count;
          }
      }else{
          count = 0;
      }
  }
  return max;
}

// Test Case
let arr = [1, 1, 0, 1, 1, 1];
console.log(`Optimal Solution`, maxConsecutiveOnes(arr));