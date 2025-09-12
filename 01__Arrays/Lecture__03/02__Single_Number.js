// LeetCode Link --> https://leetcode.com/problems/single-number/

// brute-force solution
function singleNumber(arr) {
  for(let i = 0;i<arr.length;i++){
      let count = 0;
      for(let j = 0;j<arr.length;j++){
          if(arr[i]===arr[j]){
              count++;
          }
      }
      if(count===1){
          return arr[i];
      }
  }
}
// Test-Case
console.log(singleNumber([2,2,1]));

// Optimal Solution
function singleNumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }
  return xor;
}

// Test-Case
console.log(singleNumber([2,2,1]));