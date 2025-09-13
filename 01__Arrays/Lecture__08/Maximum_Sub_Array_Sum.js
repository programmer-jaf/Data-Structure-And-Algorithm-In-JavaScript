// LeetCode Link --> https://leetcode.com/problems/maximum-subarray/description/


// brute-force solution
function maxSubArraySumBruteForce(nums){
  let sum = 0;
  let maxSum = -Infinity;
  for (let start = 0; start < nums.length; start++) {
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
// Test-Case
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(`Brute-force Solution`, maxSubArraySumBruteForce(arr));


// Optimal Solution
function maxSubArraySum(nums){
  let currentSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) currentSum = 0; // Kadane's Algorithm
  }
  return maxSum;
}

// Test-Case
let brr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(`Optimal Solution`, maxSubArraySum(brr));
