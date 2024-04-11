// // let stringsArr = ["a", "A", "b"];

// // stringsArr.sort((a, b) => {
// //     return a.toLowerCase() < b.toLowerCase() ? 1 : -1
// // })


// // console.log("stringsArr:", stringsArr); // output:  [ 'a', 'A', 'b' ]

// // let courses = [{ id: 1, name: "QJava" }, { id: 2, name: "nava" }]

// // courses.sort((a, b) => {
// //     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
// //     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
// // })
// // console.log("courses:", courses);


// // How to Avoid Modifying the Original Array When Sorting
// // let originalArray = [2, 1, 3];
// // let sortedArray = originalArray.slice()
// // console.log(originalArray); // Output: [2, 1, 3]
// // console.log(sortedArray); // Output: [1, 2, 3]
// // originalArray.push(5)
// // console.log("originalArray----", originalArray);

// // let originalArray = [2, 1, 3];
// // originalArray.unshift([5, 6])
// // originalArray.unshift(5, 6)

// // console.log("originalArray:", originalArray);

// // check slice and splice method

// // const arr = [1, 2, 3, 4, 1]
// // console.log(arr.indexOf(1));
// // console.log(arr.indexOf('a'));
// // console.log(arr.lastIndexOf(1));
// // console.log(arr.lastIndexOf(6));
// // console.log(arr.includes(6));



// let courses = [{ id: 1, name: "QJava" }, { id: 2, name: "nava" }]
// let cc = courses.findIndex((course) => {
//     return course.name === 'nava'
// })

// console.log("cc:", cc);




// const nums = [1, 2, 3, 4]
// // const last = nums.pop()
// // const first = nums.shift()
// // nums.splice(2, 1)
// console.log("nums:", nums.splice(2, 1));

// const nums = { a: 6, b: 9 }
// let cc = [...nums]// copy of nums object
// console.log("", cc);

// const first = [1, 2, 3]
// const second = [4, 5, 6]
// const combined = first.concat(second)
// console.log("combined", combined);

// first[0] = 10
// console.log("combined", combined);

// const first = [1, 2, 3]
// let res = first.join('-')
// console.log("res:", res); 


const first = [1, 2, 3]
const atLeastOnePositive = first.some(val => {
    return val > 0
})

console.log("allPositive: ", atLeastOnePositive);