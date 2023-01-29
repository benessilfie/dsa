function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0; // i is the index of the last unique value

  // Using the array itself to store the unique values
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++; // Increment i to the next index where a unique value can be stored
      arr[i] = arr[j]; // Overwrite the value at index i with the value at index j
    }
  }

  return i + 1; // i is the index of the last unique value, so i + 1 is the number of unique values
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 7, 7, 12, 12, 13])); // 7




// function countUniqValues(arr) {
//   if (arr.length === 0) return 0;

//   let pointerA = 0;

//   for (let pointerB = 1; pointerB < arr.length; pointerB++) {
//     if (arr[pointerA] !== arr[pointerB]) {
//       pointerA += 1;
//       arr[pointerA] = arr[pointerB];
//     }
//   }

//   return pointerA + 1;
// }


// console.log(countUniqValues([1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 7, 7, 12, 12, 13])); // -> 7
