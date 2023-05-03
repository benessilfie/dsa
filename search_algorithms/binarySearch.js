var ODD_NUMBERS = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        console.log("Mid", arr[mid]);
        if (arr[mid] === target) {
            console.log("Found it!", arr[mid]);
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
            console.log("Left", arr[left]);
        }
        else if (arr[mid] > target) {
            right = mid - 1;
            console.log("Right", arr[right]);
        }
    }
    return -1;
}
console.log(binarySearch(ODD_NUMBERS, 11)); // 5
