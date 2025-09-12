// GFG Link --> https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}