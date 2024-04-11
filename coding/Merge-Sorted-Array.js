// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n

let nums1 = [1, 2, 3], nums2 = [2, 5, 6];
// let nums1 = [1, 2, 3,0,0,0], nums2 = [2, 5, 6];


function merge(num1, m, num2, n) {
    let k = m + n - 1;
    let i = m - 1
    let j = n - 1;
    while (i >= 0 && j >= 0) {
        if (num1[i] > num2[j]) {
            num1[k--] = num1[i--];
        }
        else {
            num1[k--] = num2[j--];
        }
    }
    console.log("num1:", num1);
}
merge(nums1, 3, nums2, 3)
