// LeetCode Link --> https://leetcode.com/problems/move-zeroes/

// Brute-force Solution
function moveZerosToTheEnd(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  return arr;
}

// Test-Case
let arr = [0, 1, 0, 3, 12];
console.log(`Brute-force Solution`, moveZerosToTheEnd(arr));


// Optimal Solution
function moveZerosToTheEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

// Test-Case
let brr = [0, 1, 0, 3, 12];
console.log(`Optimal Solution`, moveZerosToTheEnd(brr));

