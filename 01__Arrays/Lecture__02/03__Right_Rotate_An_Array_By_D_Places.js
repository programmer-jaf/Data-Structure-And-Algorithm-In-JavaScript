// LeetCode Link --> https://leetcode.com/problems/rotate-array/description/


// Optimal Solution
function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Optimal Solution
function rightRotateByD(arr, k) {
  let n = arr.length;
  let d = k % n;
  // reverse last d elements
  reverse(arr, n - d, n - 1);
  // reverse first n-d elements
  reverse(arr, 0, n - d - 1);
  // reverse whole array
  reverse(arr, 0, n - 1);
  return arr;
}


// Test-Case
let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(`Optimal Solution`, rightRotateByD(arr, k));