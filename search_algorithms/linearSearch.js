var usernames = ["John", "Jane", "Jack", "Jill", "James"];
var regionsInGhana = [
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
function linearSearch(array, key) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === key)
            return i;
    }
    return -1;
}
console.log(linearSearch(usernames, "Jack")); // 2
console.log(usernames.indexOf("Jack")); // 2
console.log(linearSearch(regionsInGhana, "Volta")); // 2
