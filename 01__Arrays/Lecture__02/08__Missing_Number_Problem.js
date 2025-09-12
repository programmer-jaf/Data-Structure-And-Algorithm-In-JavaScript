// LeetCode Link --> https://leetcode.com/problems/missing-number/description/
// GFG Link --> https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1

// Brute-Force Solution
function missingNumber(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
  return n;
}


// Test-Case
let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // Output: 8 Time Complexity BigO (n)
console.log(`Brute-force Solution`, missingNumber(arr));

// Better Solution
function missingNumber(arr) {
  let set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return arr.length;
}


// Test-Case
let brr = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // Output: 8 Time Complexity BigO (n)
console.log(`Better Solution`, missingNumber(brr));


// Optimal Solution
function missingNumber(arr) {
  let n = arr.length;
  let total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return total - sum;
}


// Test-Case
let crr = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // Output: 8 Time Complexity BigO (n)
console.log(`Optimal Solution`, missingNumber(crr));