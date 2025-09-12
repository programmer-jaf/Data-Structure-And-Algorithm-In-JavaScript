// LeetCode Link --> https://leetcode.com/problems/intersection-of-two-arrays/description/
// GFG Link --> https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-arrays-with-duplicate-elements/1

// brute-force
/*
1. sort both the arrays
2. iterate over the smaller array and check if the element is present in the larger array
3. if present, push it to the result array
*/
function intersectionOfTwoSortedArrays(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        if (!result.includes(a[i])) {
          result.push(a[i]);
        }
        break; // avoid counting the same element twice
      }
    }
  }
  return result;
}

// Test-Case
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
console.log("Brute-force Solution",intersectionOfTwoSortedArrays(arr1, arr2));

// Optimal Solution
/*
1. sort both the arrays
2. iterate over the smaller array and check if the element is present in the larger array
3. if present, push it to the result array
*/
function intersectionOfTwoSortedArraysOptimal(a, b) {
  let i = 0,
    j = 0,
    result = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      i++;
    } else if (a[i] > b[j]) {
      j++;
    } else {
      if (result.length === 0 || result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
      i++;
      j++;
    }
  }
  return result;
}


// Test-Case
let a = [1, 2, 3, 4, 5];
let b = [2, 4, 6, 8];
console.log("Optimal Solution",intersectionOfTwoSortedArraysOptimal(a, b));