// GFG Link --> https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1

// Brute-force Solution
function leftRotateByD(arr, d) {
  // store first d elements
  let temp = [];
  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }
  // shift from D to end
  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i];
  }
  // shift from start to D
  for (let i = 0; i < d; i++) {
    arr[arr.length - d + i] = temp[i];
  }
  return arr;
}

// Test-Case
let arr = [1, 2, 3, 4, 5];
let d = 2;
console.log(`Brute-force Solution`, leftRotateByD(arr, d));


// Optimal Solution

  function reverse (arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
    function leftRotateByDOptimal(arr, d) {
      // reverse from 0 to D
      // reverse from D to N (arr.length)
      // reverse the whole array

      // reverse from 0 to d
      reverse(arr, 0, d - 1);
      // reverse from d to n
      reverse(arr, d, arr.length - 1);
      // reverse the whole array
      reverse(arr, 0, arr.length - 1);
      return arr;
    };

// Test-Case
let brr = [1, 2, 3,4, 6, 5];
let k = 2;
console.log(`Optimal Solution`, leftRotateByDOptimal(brr, k));