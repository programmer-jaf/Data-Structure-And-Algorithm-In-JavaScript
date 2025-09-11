// LeetCode Link --> https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// GFG Link --> https://www.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1

// brute-force solution
function removeDuplicatesBruteForce(arr) {
  let set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = set[i];
  }
  return set.size;
}

// Optimal Solution
function removeDuplicatesFromArray(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// Check Test-Case
let arr = [1, 1, 2, 2, 3, 4, 4, 4, 5];
console.log(`Brute-force`, removeDuplicatesBruteForce(arr));

let brr = [1, 1, 2, 2, 3, 4, 4, 4, 5];
console.log(`Optimal Solution`, removeDuplicatesFromArray(brr));
