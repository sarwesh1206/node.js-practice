// const duplicateArray = [1, 2, 2, 3, 3, 3, 4];

// const arr = duplicateArray.filter((item, pos) => {
//     return duplicateArray.indexOf(item) != pos;
// })
// console.log("arr:", arr);

// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)
// console.log("arr:", sum);

// let cars = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }];


// const obj = cars.reduce((acc, curr) => {
//     acc[curr.make] = acc[curr.make] || []
//     acc[curr.make].push(curr);
//     return acc;
// }, {})

// console.log("obj:", obj);

// const obj = cars.reduce((acc, curr) => {
//     if (acc[curr.make]) {
//         acc[curr.make] = acc[curr.make] + 1;
//     }
//     else {
//         acc[curr.make] = 1;
//     }
//     return acc;
// }, {})

// console.log("obj:", obj);

// let array = [1, 2, 3, 4, 5];
// array.splice(2, 2, 6, 7);
// console.log("array", array);
// const name = {
//     firstName: "sachin",
//     lastName: "sarwesh"
// }
// function print(home) {
//     console.log("firstName:", this.firstName);
//     console.log("firstName:", this.lastName);
//     console.log("home:", home);

// }
// print.call(name, 'noida');


let cars = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }];


const obj = cars.reduce((acc, curr) => {
    acc[curr.make] = acc[curr.make] || []
    acc[curr.make].push(curr);
    return acc
}, {})

// const obj = cars.reduce((acc, curr) => {
//     acc[curr.make] = acc[curr.make] || []
//     acc[curr.make].push(curr);
//     return acc;
// }, {})

// console.log("obk===", obj);

const duplicateArray = [1, 2, 2, 3, 3, 3, 4];

const arr1 = duplicateArray.filter((item, pos) => {
    return duplicateArray.indexOf(item) == pos
})

console.log("ar1====", arr1);
const arr = duplicateArray.filter((item, pos) => {
    return duplicateArray.indexOf(item) != pos;
})
console.log("arr:", arr);