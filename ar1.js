// let arr = [{ id: 1, name: 'javascript' }, { id: 2, name: "Node" }, { id: 2, name: "boode" }]
// arr.sort((a, b) => {
//     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
//     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
//     if (a.name.toLowerCase() == b.name.toLowerCase()) return 0

// }
// )

// let arr = [1, 2, 3, 4, 5]
// for (let value in arr) console.log(value)
// function move(arr, index, offset) {
//     let output = [...arr];
//     let position = index + offset

//     if (position >= arr.length || position < 0) {
//         console.log('invalid index')
//     }
//     else {
//         let deleted = output.splice(index, 1)[0]
//         output.splice(position, 0, deleted)
//         console.log(output);
//     }
// }

// move(arr, 1, -5)

// let sortedArray = arr.sort((a, b) => a - b > 0 ? -1 : 1)

// console.log(maxElement)

// function Circle(radius) {
//     this.radius = radius

//     this.move = function () {
//         console.log('move')
//     }
// }

// Circle.prototype.draw = function () {
//     console.log('draw')
// }

// c = new Circle(5)
// // console.log(c)

// console.log(Object.keys(c))

// for (let val in c) console.log(val)


// let x = { "a": 5, "b": 6 };
// let y = Object.assign({}, { "c": 5 }) // create shallow copy
// let z = Object.create(x) // create deep copy

// console.log("x:", x);
// console.log("y:", y);
// console.log("z:", z);
// y.a = 0;
// console.log('after')
// console.log("x:", x);
// console.log("y:", y);
// console.log("z:", z);
// // console.log("keys", Object.keys(z))

// for (let key in z) console.log("in key", z[key])
// var a = 100;
// {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     console.log("a", a); // It will shadow value of a
//     console.log("b:", b);
//     console.log("c:", c);
// }
// console.log("a", a);

// let name = {
//     firstName: "Ranjesh",
//     lastName: "Singh"
// }

// function printName(home) {
//     console.log(this.firstName + this.lastName + " " + home)
// }
// // printName.call(name, 'gkp')
// // printName.apply(name, ['gkp'])
// fullName = printName.bind(name, 'gkp')
// fullName()


// // 'use strict'
// name = 'ranjesh'
// console.log(name)


// let student1 = {
//     name: "Manish",
//     company: "Gfg"
// }

// let st2 = Object.create(student1);
// console.log(student1)
// st2['name'] = 'gggggg'
// for (key in st2) console.log(st2[key])

// let student2 = { ...student1 };

// student2.name = "Rakesh"

// console.log("student 1 name is", student1.name)
// console.log("student 2 name is ", student2.name);


// Array.prototype.customForEach = function (callback) {

//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i)
//     }

// }

// const arr = [1, 2, 3];
// arr.customForEach(function (val, index) {
//     console.log(val, index, arr)
// })

// var x = 0;
// function foo() {
//     x++;
//     return x;
// }
// console.log(typeof foo());

// function foo(title) {
//     this.title = title
//     console.log("this",this);
// }
// console.log(typeof foo());



// ======= sum of two elements
// let arr = [1, 2, 3, 4, 6, 7, 8, 9]

// function sumOfTwo(ar, target) {
//     let hash = {}

//     let sum = []
//     for (let element of ar) {
//         let diff = target - element;
//         if (hash[diff]) {
//             sum.push([element, diff])
//         }
//         else {
//             hash[element] = element
//         }
//     }
//     return sum;
// }

// console.log("sum:", sum(arr, 9)); // sum: [ [ 6, 3 ], [ 7, 2 ], [ 8, 1 ] ]


// let arr = [1, 2, 3, 4, 3, 6, 5, 4]

// function unique(arr) {
//     let hash = {}
//     for (let item of arr) {
//         if (!hash[item]) {
//             hash[item] = item
//         }
//     }
//     let res = Object.values(hash)
//     return res
// }

// console.log("unique(arr)", unique(arr));

// function duplicate(arr) {
//     let res = arr.filter((item, index) => {
//         return arr.indexOf(item) != index
//     })
//     return res
// }

// console.log("duplicate:", duplicate(arr));

// let str = 'puakaup'

// function palindromr(str) {
//     let arr = [...str]
//     let j = arr.length - 1;
//     let pal = true;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[j]) {
//             j--;
//         }
//         else {
//             pal = false;
//             break;

//         }
//     }
//     return pal
// }

// console.log(palindromr(str))

// let arr = [7, 1, 5, 2, 8, 19]

// function maxDiff(arr) {
//     let maxDifference = 0;
//     for (let i = 0; i < arr.length; i++) {

//         // for (let j = arr.length - 1; j >= 0; j--) {
//         //     maxDifference = Math.min(maxDifference, arr[i] - arr[j])
//         // }
//         for (let j = i + 1; j < arr.length; j++) {
//             maxDifference = Math.abs(Math.min(maxDifference, arr[i] - arr[j]))
//         }
//     }
//     return maxDifference
// }

// console.log("maxDiff()", maxDiff(arr));

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error('Error')), 1000);
//   });

//   promise
//     .then(result => console.log(result))
//     .then(result => console.log(result))
//     .catch(error => console.error(error.message))
//     .finally(() => console.log('Finally'));

function getData(dataId) {
  return new Promise((resolve, reject) => {

  })
}



// Asynchronous means that things can happen independently of the main program flow.
// The Event Loop is the mechanism that allows Node.js to execute code asynchronously.
// #Node.js can delegate tasks to other services that indeed can be multithreaded and perform multiple jobs at the same time, such as I/O operations (the OS can handle them) or database calls (the database engine can handle them).

// The Event Loop is the mechanism that allows Node.js to execute code asynchronously. Asynchronous operations performed in Node.js can have a callback, which is the function that should be run when an asynchronous call ends. This callback is passed to the Event Loop. Every iteration of the Event Loop has a few cycles that check if asynchronous calls were resolved, and the callback passed to it should be run by Node.js.

//The main difference between synchronous and asynchronous request processing lies in the fact that synchronous operations block the main thread, hindering Node.js from performing any other actions. In contrast, asynchronous operations utilize a callback-based approach in which the requested value is awaited and a callback sent to the Event Loop. This allows Node.js to handle subsequent requests while waiting for the value to be resolved.

// I/O = input/output task such that: reading some rows from database and returns it, counts number of lines in a file,…
// CPU: Tasks which your CPU has to do the job. i.e: calculate a operation: 1+1 = 2, image processing.
// So just remember that I/O task is something that CPU can’t handle itself but must have the I/O subsystem to do it
// CPU task must be executed in the main thread of NodeJS, while I/O task can be executed in threads within the thread pool provided by LibUV. That’s the reason why NodeJS is not suitable for application with CPU intensive tasks. We’ll go into detail in the next few minutes.
// Blocking I/O vs Non Blocking I/O:

// Blocking I/O: Requests involve with I/O operation will block the thread/process until it’s done
// Non blocking I/O: Request involve with I/O operation will be pushed into the queue and executed later (if it’s not ready, if it’s ready, returns it right away)
//In terms of scaling, it’s easier to scale applications horizontally (increase the number of machines where an application runs) than vertically (increase the power of the machine)


//Remove duplicate elements from array
// const arr = [1, 1, 1, 2, 2, 2, 3, 5, 3, 2];
// const newArr = [...new Set(arr)];
// console.log(newArr); // [ 1, 2, 3, 5 ]

//Remove all falsy values in an array
const arr = [0, false, NaN, undefined, "", null, 1, true, "Hello World", { name: "value" }];
const truthyValues = arr.filter(Boolean);
console.log(truthyValues); // [1, true, "Hello World", {name: "value"}]

//Convert string to number
const strInt = "10";
const number = +strInt;
console.log("number", number); // 10

//Array to Object
// const arr = [1, 2, 3, 4, 5, 6];
const obj = { ...arr };
console.log(obj); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }