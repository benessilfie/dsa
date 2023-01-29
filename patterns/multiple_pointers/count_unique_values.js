function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let pointerA = 0; // pointerA is the index of the last unique value
  let count = 1; // count keeps track of the number of unique values

  for (let pointerB = 1; pointerB < arr.length; pointerB++) {
    if (arr[pointerA] !== arr[pointerB]) {
      pointerA = pointerB; // move pointerA to pointerB's position which is the next unique value
      count += 1;
    }
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 7, 7, 12, 12, 13])); // -> 7
console.log(countUniqueValues([1, 1, 1, 1, 1])); // -> 1
