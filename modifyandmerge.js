function modifyAndMerge(arr1, arr2) {
    let modifiedArr1 = arr1.slice();
    modifiedArr1.splice(1, 1, "bus", "scooter");
    let meergedArray = modifiedArr1.concat(arr2);
    return meergedArray;
}
let arr1 = ['csr', "bike", "train"];
let arr2 = ["plane", "ship"];
let result = modifyAndMerge(arr1, arr2);
console.log(result);
console.log(arr1);
console.log(arr2);