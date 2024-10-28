function extractAndReverse(arr) {
    let subArray = arr.slice(2, 4);
    let reversedSubArray = subArray.reverse();
    return reversedSubArray;
}
let originalArray = [15, 30, 45, 60, 75, 90];
let result = extractAndReverse(originalArray);
console.log(result);
console.log(originalArray);