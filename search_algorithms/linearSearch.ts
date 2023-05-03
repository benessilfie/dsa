let usernames: string[] = ["John", "Jane", "Jack", "Jill", "James"];
let regionsInGhana: string[] = [
  "Greater Accra",
  "Ashanti",
  "Western",
  "Eastern",
  "Central",
  "Volta",
  "Brong Ahafo",
  "Northern",
  "Upper East",
  "Upper West",
];

function linearSearch(array: string[], key: string): number {
  for (const [index, value] of array.entries()) {
    if (value === key) return index;
  }
  return -1;
}

// function linearSearch(array: string[], key: string): number {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === key) return i;
//   }
//   return -1;
// }

console.log(linearSearch(usernames, "Jack")); // 2
console.log(usernames.indexOf("Jack")); // 2
console.log(linearSearch(regionsInGhana, "Volta")); // 2
