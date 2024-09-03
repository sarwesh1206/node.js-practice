let cars = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }],

    result = cars.reduce(function (r, a) {
        r[a.make] = r[a.make] || [];
        r[a.make].push(a);
        return r;
    }, {});
let ct;
// let obj = cars.reduce((acc, curr) => {
//     // acc[curr.make] = acc[curr.make] || [];
//     // acc[curr.make].push(curr)
//     // return acc;
//     // acc[curr.make] = acc[curr.make]++ || 0;
//     acc[curr.make] = ++acc[curr.make] || 1;

//     // if (acc[curr.make]) {
//     //     acc[curr.make] = ++ct;
//     //     console.log("if:");
//     // }
//     // else {
//     //     ct = 1;
//     //     acc[curr.make] = ct;
//     //     console.log("else:");

//     // }
//     // return acc;

// }, {})
// console.log(obj);

// const people = [
//     { name: 'Lee', age: 21 },
//     { name: 'Ajay', age: 20 },
//     { name: 'Jane', age: 20 }
// ];


// let obj = people.reduce((acc, curr) => {
//     acc[curr.age] = acc[curr.age] || [];
//     acc[curr.age].push(curr);
//     return acc;
// }, {})
// console.log("obj:", obj);

// const obj = {
//     color: "red",
//     name: "sachin"
// }

// const { color, name } = obj;
// console.log("color,name", color, name);

//callback in js
// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some kind of event or when a specific condition is met. Callback functions are a powerful tool for creating asynchronous code and allow you to structure your code in a more manageable way.

// function add(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }

// function logResult(result) {
//     console.log("The result is: " + result);
// }

// add(2, 3, logResult); // Output: The result is: 5

//Array methods

// let array = [ 1, 2, 3 ];
// array.push(4 , 5);
// console.log(array); // [ 1, 2, 3 ,4 ,5 ]
// let array = [ 1, 2, 3 ];
// let last = array.pop();
// console.log(last); // 3
// console.log(array); // [ 1, 2 ]

// let array = [1, 2, 3];
// let firstElement = array.shift();
// console.log(firstElement); // 1
// console.log(array); // [ 2, 3 ]

// let array = [1, 2, 3];
// array.unshift(0, -1);
// console.log(array); // [ -1, 0, 1, 2, 3 ]


// let array = [1, 2, 3, 4, 5];
// array.splice(2, 2, 6, 7); the index at which to start changing the array, the number of elements to remove, and the elements to add
// console.log(array); // [1, 2, 6, 7, 5]

// let array = [1, 2, 3, 4, 5];
// let newArray = array.slice(1, 4);
// console.log(newArray); // [2, 3, 4]
// console.log(array); // [1, 2, 3, 4, 5]

// let array = [1, 2, 3, 4, 5];
// let sum = array.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum); // 15

//What is Nullish Coalescing and Optional Chaining in JavaScript?
//https://iamtoufiq.hashnode.dev/what-is-nullish-coalescing-and-optional-chaining-in-javascript

//https://blog.realice.me/unpacking-the-trickiest-concepts-in-javascript