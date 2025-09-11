// GFG Link --> https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1

function checkIfArrayIsSorted(arr) {
  let ascending = true,
    descending = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      ascending = false;
    } else if (arr[i] < arr[i + 1]) {
      descending = false;
    }
  }
  return ascending || descending;
}

// Test-Case
let arr = [1, 8, 7, 56, 90];
console.log(`Solution: `, checkIfArrayIsSorted(arr));
