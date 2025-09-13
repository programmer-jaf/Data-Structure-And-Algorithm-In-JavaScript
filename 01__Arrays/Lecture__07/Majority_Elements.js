// LeetCode Link --> https://leetcode.com/problems/majority-element/description/

// Brute-force solution

function majorityElementBruteForce(nums){
  for(let i =0;i<nums.length;i++){
      let count = 0;
      for(let j = 0;j<nums.length;j++){
          if(nums[i]===nums[j]){
              count++;
          }
      }
      if(count>nums.length/2){
          return nums[i];
      }
  }
  return -1;
}

// Optimal Solution
function majorityElement(nums){
  let count = 0;
  let candidate = null;
  for(let i = 0;i<nums.length;i++){
      if(count===0){
          candidate = nums[i];
      }
      if(candidate===nums[i]){
          count++;
      }else{
          count--;
      }
  }
  return candidate;
}