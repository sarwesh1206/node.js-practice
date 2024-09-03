
// console.log("hello",);
// function HtmlElement() {
//     this.click = function () {
//         console.log("click",);
//     }
// }
// HtmlElement.prototype.focus = function () {
//     console.log("focus",);
// }
// function HtmlSelectElement(arr) {
//     if (arr)
//         this.items = arr;
//     else
//         this.items = []
//     this.addItem = function (item) {
//         this.items.push(item);
//     }
//     this.removeItem = function (item) {
//         const index = this.items.indexOf(item)
//         this.items.splice(index, 1);
//     }
// }
// HtmlSelectElement.prototype = new HtmlElement();
// // HtmlSelectElement.prototype.constructor = HtmlSelectElement;
// HtmlSelectElement.prototype.click = function () {
//     console.log("htmlselect click",);
// }


// import { EventEmitter } from 'events';
// const EventEmitter = require('events');
// console.log("module", module);
// module.exports = {
//     EventEmitter
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.slice().sort();
// console.log("fruits:", fruits.slice().sort());

let stringsArr = ['d', "a", "A", "b", 'c'];

// stringsArr.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? 1 : -1);
// console.log(stringsArr); // Output: ["b", "A", "a"]

new_str = stringsArr.sort((a, b) => b.toLowerCase() - a.toLowerCase())
// new_str = stringsArr.sort((a, b) => b.toUpperCase() - a.toUpperCase())


// console.log(new_str);

// const books = [
//     { title: "Book A", year: 2010 },
//     { title: "Book B", year: 2005 },
//     { title: "Book C", year: 2018 },
// ];

// // const booksSortedByYearAsc = books.sort((a, b) => b.year - a.year);
// const booksSortedByYearAsc = books.find().sort('year');

// console.log(booksSortedByYearAsc);

// function sum() {
//     let sum = 0;
//     for (let val of arguments) {
//         sum = sum + val
//     }
//     console.log("lll", arguments)

//     return sum;

// }
// console.log(sum(1, 2, 3))

// const video = {
//     title: 'a',
//     tags: ['a,', 'b', 'c'],
//     displayTag() {
//         console.log(this)
//         this.tags.forEach(function (tag) {
//             console.log(tag, this.title)
//         }, this)
//     }
// }
// let arr = Object.entries(video)
// console.log("arr:", arr.flat());

// // console.log("video.dispayTag()", video.displayTag());
// video.displayTag()

// const arr = [1, 2, 3, 4]
// function occr(arr, num) {
//     let res = arr.reduce((acc, curr) => {
//         let ct = curr === num ? 1 : 0
//         return acc + ct;
//     }, 0)
//     return res;
// }
// console.log("res", occr(arr, 1));

// let person = { age: 10 }
// let res = Object.getOwnPropertyDescriptor(person, 'age')

// Object.defineProperty(person, 'name', {
//     configurable: false,
//     writable: false,
//     enumerable: true,
//     value: 'ranjesh'

// })
// person.name = 'sachin'
// console.log("person", person);

// let res = person.hasProperty('name')
// console.log("res:", res);

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

console.log({} === {}, {} == {}, [] === [], [] == [], null == null, ['a'] === ['a'])
