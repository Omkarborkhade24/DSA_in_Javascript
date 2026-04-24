// Array of numbers (must be sorted for binary search)
const list = [2, 4, 6, 8, 10];
const key = 6;

//Linear Search
const linearFound = list.includes(key);

// true or false
console.log('Linear Search:', linearFound);

// Binary Search
function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
      // return index if found
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // not found
  return -1;
}

const index = binarySearch(list, key);
if (index >= 0) {
  console.log('Element found at index', index);
} else {
  console.log('Element not found');
}
