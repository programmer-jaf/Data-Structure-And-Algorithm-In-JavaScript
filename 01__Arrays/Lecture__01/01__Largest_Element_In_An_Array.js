// GFG Link --> https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1

// brute-force Solution
function largestElementInAnArrayBruteForce(arr) {
  // sort
  arr.sort((a,b)=> (a-b)); // BigO (n Log n)
  let largest = arr[arr.length-1];
  return largest;
}

// Test-Cases
let arr = [1, 8, 7, 56, 90];

console.log(`Brute-force`,largestElementInAnArrayBruteForce(arr));

// Optimal Solution
function largestElementInAnArray(arr) {
  let largestElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}

// Test-Case
console.log(`Optimal Solution`,largestElementInAnArray(arr));