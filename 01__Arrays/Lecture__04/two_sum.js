// LeetCode Link --> https://leetcode.com/problems/two-sum/

// brute-force
function twoSumBruteForce (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

// Test-Case
const arr = [2, 7, 11, 15];   // Time Complexity --> O(n^2)
const target = 9;   // Space Complexity --> O(1)
const result = twoSumBruteForce(arr, target);
console.log(result);

// Optimal Solution
function twoSumOptimal (arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
};

// Test-Case
const brr = [2, 7, 11, 15];   // Time Complexity --> O(n)
const tar = 9;   // Space Complexity --> O(n)
let results = twoSumOptimal(arr, target);
console.log(results);