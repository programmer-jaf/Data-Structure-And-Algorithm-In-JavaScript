// GFG Link --> https://www.geeksforgeeks.org/problems/second-largest3735/1

// brute-force solution
function secondLargestElementInAnArrayBruteForce(arr) {
  // sort
  arr.sort((a, b) => a - b); // BigO (n Log n)
  let largest = arr[arr.length - 1];
  // second largest element
  let secondLargest = -1;
  for (let i = arr.length - 2; i > 0; i--) {
    if (largest !== arr[i] && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// Test-Case
let arr = [1, 8, 7, 56, 90]; // Total Time-Complexity BigO (n Log n) + BigO (n)

console.log(`Brute-force`, secondLargestElementInAnArrayBruteForce(arr));

// Better Solution
function secondLargestElementInAnArray(arr) {
  let largest = arr[0];
  let secondLargest = -1;
  // find Largest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  // find Second Largest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// Test-Case
console.log(`Better Solution`, secondLargestElementInAnArray(arr));

// Optimal Solution

function secondLargestElementInAnArray(arr) {
  let largest = arr[0];
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// Test-Case
console.log(`Optimal Solution`, secondLargestElementInAnArray(arr));
