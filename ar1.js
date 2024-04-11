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


//have a tailing white space
//fix this later
//now i m sleepy
// function reverseWords(str) {
//     var rev = [],
//         wordLen = 0;
//     for (var i = str.length - 1; i >= 0; i--) {
//         if (str[i] == ' ' || i == 0) {
//             rev.push(str.substr(i, wordLen + 1));
//             wordLen = 0;
//         }
//         else
//             wordLen++;
//     }
//     return rev.join(' ');
// }

// console.log(reverseWords('ranjesh singh'))


// Array.prototype.customForEach = function (callback) {

//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i)
//     }

// }

// const arr = [1, 2, 3];
// arr.customForEach(function (val, index) {
//     console.log(val, index, arr)
// })

var x = 0;
function foo() {
    x++;
    return x;
}
console.log(typeof foo());
