function findBinary(decimal) {
  let result = "";
  if (decimal === 0) return result;

  result = (decimal % 2) + result;
  return findBinary(Math.floor(decimal / 2)) + result;
}

console.log(findBinary(0));
