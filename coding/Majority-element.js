// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
majority([3, 2, 3])
function majority(num) {
    const dict = {}
    for (let val of num) {
        if (dict[val]) dict[val]++
        else dict[val] = 1
    }

    let keys = Object.keys(dict)
    keys.sort((a, b) => dict[b] - dict[a])
    console.log("keys[0]", keys[0]);
}