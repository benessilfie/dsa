function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right -= 1; // or right--
    } else {
      left += 1; // or left++
    }
  }
}

// Using a for loop instead of a while loop
// function sumZero(arr) {
//   for (let left = 0, right = arr.length - 1; left < right;) {
//     let sum = arr[left] + arr[right];

//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right -= 1;
//     } else {
//       left += 1;
//     }
//   }
// }


console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // -> [-2, 2]
