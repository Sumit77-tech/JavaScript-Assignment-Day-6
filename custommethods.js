function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
function sortAndConcat(arr1, arr2) {
    let sortedArr1 = arr1.slice().sort((a,b) => a - b);
    let sortedArr2 = arr2.slice().sort((a, b) => a - b);
    return sortedArr1.concat(sortedArr2);
}
function main() {
    let arr1 = [10, 25, 7, 30, 2];
    let arr2 = [5, 60, 15, 45, 8];
    let evenNumbersArr1 = filterEvenNumbers(arr1);
    let evenNumberArr2 = filterEvenNumbers(arr2);
    console.log("Even numbers from arr1:", evenNumbersArr1);
    console.log("Even numbers from arr2:", evenNumberArr2);

    let sumArr1 = sumOfArray(arr1);
    let sumArr2 = sumOfArray(arr2);
    console.log("Sum of arr1:", sumArr1);
    console.log("Sum of arr2:", sumArr2);

    let sortedAndConcatenatedArray = sortAndConcat(arr1, arr2);
    console.log("Sorted and concatenated array:", sortedAndConcatenatedArray);
}
main();