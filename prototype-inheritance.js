// In prototype inheritence, We do not have any class, Only objects are there.
// proto type meeans parent object
// JavaScript does not contain classes and but it’s an still strongly object oriented language. The object-to-object relation in JavaScript is implemented with the prototype and the resulting prototypal pattern is very unique to JavaScript


// Objects created by a given constructor will have same prototype.

// function Circle(radius) {
//     Shape.call(this, color);
//     this.radius = radius;
//     this.draw = function () {

//     }
// }
// const circle = new Circle(10);
// prototype of circle object is Circle object.
// prototype of Circle object is Object.
//getProtoTypeOf() will print the prototype of object
//e.g
// console.log(Object.getPrototypeOf(circle))
// let x = {};
// console.log(Object.getPrototypeOf(x))

// console.log(circle.__proto__) It is deprecated
// console.log(Circle.prototype);
// const c1 = new Circle(1);

// property of an object has attached attributes which determines it will be iterated,overided or not.

//Returns only instance members
// console.log(Object.keys(c1));

// Returns all member (instance + prototype)
// for (let key in c1) console.log(key);
//check ownn property
// c1.hasOwnProperty('radius');


//---------------creating your own prototypical inheritance----------
// function Shape(color) {
//     this.color = color
// }
// Shape.prototype.duplicate = function () {
//     console.log("duplicate");
// }
// function Circle() {
//     this.radius = this.radius;
// }
// Circle.prototype = Object.create(Object.prototype); // objectBase
// Circle.prototype = Object.create(Shape.prototype); // objectBase
// As a best practice also reset the constructor while resetting prototype
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function () {
//     console.log("draw");
// }
// const s = new Shape();
// const c = new Circle();
//-------------------------------------------------------------------

// https://babeljs.io/ compiles the ES6/modern js code into browser compatible code

// Function declaration is hoisted
//function sayHello(){

// }

// Function expression is not hoisted
// const fun = function(){}

//------class-------------
// class id not hoisted
//class Declaration
// class Circle {

// }

// class Expression
// const Square = class {

// }

// ----static method------
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // instance method
    draw() {

    }
    // static method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
const circle1 = new Circle('{"radius":1}')
console.log("circle1", circle1);

// Strict mode enbling means window object will not be modified.
// In WeakMap, keys are objects i.e keys are weak means they do not have references it can easily be garbage collected
