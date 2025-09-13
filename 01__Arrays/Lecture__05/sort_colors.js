// LeetCode Link -->  https://leetcode.com/problems/sort-colors/

// brute-force solution
// Using Merge Sort

// Better Solution
function sortColorsBetterSolution(arr) {
  let count1 = 0, count2 =0, count3 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count1++;
    if (arr[i] === 1) count2++;
    else count3++;
  }

  for (let i = 0; i < count1; i++) arr[i] = 0;
  for (let i = count1; i < count1 + count2; i++) arr[i] = 1;
  for (let i = count1 + count2; i < count1 + count2 + count3; i++) arr[i] = 2;
}

// Time Complexity --> O(N)
// Space Complexity --> O(1)
// Test Cases
let arr = [1, 0, 2, 1, 0, 2, 1];
sortColorsBetterSolution(arr);
console.log(arr);


// Optimal Solution --> Dutch National Flag Algorithm
function sortColorsOptimalSolution(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}

// Time Complexity --> O(N)
// Space Complexity --> O(1)
// Test Cases
let brr = [1, 0, 2, 1, 0, 2, 1];
sortColorsOptimalSolution(brr);
console.log("Dutch National Flag Algorithm ",brr);