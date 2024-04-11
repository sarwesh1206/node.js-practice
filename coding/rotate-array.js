// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

function rotate(arr, k) {
    const len = arr.length;
    if (len == 0) return;
    const new_arr = []
    for (let start = 0; start < len; start++) {
        let pos = (start + k) % len
        new_arr[pos] = arr[start]
    }
    // console.log("new_arr:", new_arr);
    return new_arr
}
const res = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log("res:", res);