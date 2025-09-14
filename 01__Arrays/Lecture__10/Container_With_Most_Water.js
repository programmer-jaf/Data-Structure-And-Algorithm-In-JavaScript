// LeetCode Link --> https://leetcode.com/problems/container-with-most-water/description/

// Optimal Solution --> Using Two Pointer Approach
function maxArea(height) {
  let left = 0,
    right = height.length - 1,
    ans = 0;
  while (left < right) {
    width = right - left;
    Height = Math.min(height[left], height[right]);
    ans = Math.max(ans, width * Height);
    height[left] < height[right] ? left++ : right--;
  }
  return ans;
}

// Time Complexity --> O(n)
// Space Complexity --> O(1)

// Test-Case
let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // Output: 49 Time Complexity BigO (n)
console.log(`Optimal Solution`, maxArea(arr));
