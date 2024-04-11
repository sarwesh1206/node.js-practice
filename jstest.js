// const fullName = {
//     first: "sachin",
//     last: "Sarwesh"
// }

// function printName() {
//     return this.first + " " + this.last
// }

// console.log("printName", printName.call(fullName));
// getfullName = printName.bind(fullName);
// getfullName()
// console.log("getfullName()", getfullName());


const person = {
    name: "Mosh",
    age: 30
}

// for (let key in person) // key will be the attribute
// console.log(key, person[key]);
// for in loop iterate through all the properties of objects even method.

const colors = ['red', 'green', 'blue'];

// for (let index in colors)
//     console.log(index, colors[index]);

// for (let color of colors)
//     console.log(color);

// const another = Object.assign({ draw: "test" }, person)
// console.log("another", another);


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })

// promise1.then(res => {
//     console.log(res)
// })

// console.log('end');

// console.log("start",);
// const promise = new Promise((resolve, reject) => {
//     // console.log("inside promise",);
//     reject('inside promise');

// })
// promise.then(res => {
//     console.log("res", res);
// }).catch(err => {
//     console.log("reject", err);
// })
// console.log("end",);


// Ques. How to compute the sum of numbers in an array?
// const array = [1,7,8,9];
// const sum = array1.reduce((accumulator, currentValue) => accumulator = accumulator + currentValue);
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, curr) => {
    return acc + curr;
}, 1)
console.log("sum", sum);
const items = arr.filter((n) => n > 2)
console.log("items", items);
