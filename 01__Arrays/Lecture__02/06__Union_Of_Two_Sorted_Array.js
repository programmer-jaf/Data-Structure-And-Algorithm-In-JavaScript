// GFG Link --> https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1

// brute-force Solution
function unionOfTwoSortedArrays(arr1, arr2) {
  let map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], true);
  }
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], true);
  }
  return Array.from(map.keys()).sort((a, b) => a - b);
}
// Test-Case
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
console.log(unionOfTwoSortedArrays(arr1, arr2));

// Optimal Solution
function unionOfTwoSortedArraysOptimal(a, b) {
  let i = 0, j = 0;
  let union = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      if (union.length === 0 || union[union.length - 1] !== a[i]) {
        union.push(a[i]);
      }
      i++;
    } else if (a[i] > b[j]) {
      if (union.length === 0 || union[union.length - 1] !== b[j]) {
        union.push(b[j]);
      }
      j++;
    } else {
      if (union.length === 0 || union[union.length - 1] !== a[i]) {
        union.push(a[i]);
      }
      i++;
      j++;
    }
  }

  while (i < a.length) {
    if (union.length === 0 || union[union.length - 1] !== a[i]) {
      union.push(a[i]);
    }
    i++;
  }

  while (j < b.length) {
    if (union.length === 0 || union[union.length - 1] !== b[j]) {
      union.push(b[j]);
    }
    j++;
  }

  return union;
}


// Test-Case
let a = [1, 2, 3, 4, 5,10];
let b = [2, 4, 6, 8,9,];
console.log("Optimal Solution",unionOfTwoSortedArraysOptimal(a, b));
