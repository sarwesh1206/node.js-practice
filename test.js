
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

const books = [
    { title: "Book A", year: 2010 },
    { title: "Book B", year: 2005 },
    { title: "Book C", year: 2018 },
];

// const booksSortedByYearAsc = books.sort((a, b) => b.year - a.year);
const booksSortedByYearAsc = books.find().sort('year');

console.log(booksSortedByYearAsc);