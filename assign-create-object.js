// let x = { "a": 5, "b": 6 };
// let y = Object.assign(x, { "c": 5 }) // create shallow copy
// let z = Object.create(x) // create deep copy

// console.log("x:", x);
// console.log("y:", y);
// console.log("z:", z.a);


// Object.create() is used to create new object using the existing object as a prototype . This means the returned object inherits the properties of all prototypes that are linked with the source object in addition to the properties of the source object itself.

// The Object.assign() method only copies enumerable and own properties from a source object to a target object.

// Object.assign() provides shallow copying (Only properties and methods) and it will override the method and property declared.
// while Object.create() provides Deep copying provides prototype chain.
// Read more about create method from MDN


// 1. Using Spread Operator to Deep clone
// let student1 = {
// 	name: "Manish",
// 	company: "Gfg"
// }

// let student2 = { ...student1 };

// 2. Using Object.assign() method to Deep clone
// let student2 = Object.assign({}, student1);

// Using Json.parse() and Json.stringify() to Deep clone
// let student2 = JSON.parse(JSON.stringify(student1))



// function Shape() {

// }
// Shape.prototype.draw = function () {
//     console.log("draw:",);
// }


// Circle.prototype = Object.create(Shape.prototype)

// function Circle() {
//     this.radius = 5;
// }

// Circle.prototype.duplicate = function () {
//     console.log("duplicate",);
// }
// const c1 = new Circle()
// c1.draw()
//=================custom Prototype inheritence start====================
// function Shape() {

// }
// Shape.prototype.draw = function () {
//     console.log("draw",);
// }

// function Circle(radius) {
//     this.radius = radius
// }
// Circle.prototype = Object.create(Shape.prototype) // Resetting prototype
// Circle.prototype.constructor = Circle; // Resetting constructor


// Circle.prototype.duplicate = function () {
//     console.log("duplicate",);
// }
// let c = new Circle(5)
// let s = new Shape()
// console.log("c.radius", c.radius);

// =======================================//end===========================

//=====================start=======================================
// function Shape(color) {
//     this.color = color

// }
// function Circle(redius, color) {
//     Shape.call(this, color) // calling the super constructor
//     this.redius = redius;
// }
// Shape.prototype.duplicate = function () {
//     console.log("duplicate:-",);
// }

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function () {
//     console.log("draw:-",);
// }
// let c = new Circle(5, 'red')


// ===================end=================================

// ==============method overriding===========================

// function Shape(color) {
//     this.color = color
// }
// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }

// Shape.prototype.duplicate = function () {
//     console.log("duplicate",);
// }

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function () {
//     console.log("draw:",);
// }
// Circle.prototype.duplicate = function () {
//     Shape.prototype.duplicate.call(this) // optional
//     console.log("circle duplicate====",);
// }

// ===================end==========================================


// ==============Polymorphism start===========================

// function Shape(color) {
//     this.color = color
// }
// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }

// Shape.prototype.duplicate = function () {
//     console.log("duplicate",);
// }

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function () {
//     console.log("draw:",);
// }
// Circle.prototype.duplicate = function () {
//     // Shape.prototype.duplicate.call(this) // optional
//     console.log("circle duplicate====",);
// }

// function Squre(len) {
//     Shape.call(this, 'green')
//     this.len = len
// }

// Squre.prototype = Object.create(Shape.prototype)
// Squre.prototype.constructor = Squre

// Squre.prototype.draw = function () {
//     console.log("square draw:=",);
// }

// ===================end==========================================


// ==========Composition start===================
// const canWalk = {
//     walk: function () {
//         console.log("walk",);
//     }
// }
// const canSwim = {
//     swim: function () {
//         console.log("swim");
//     }
// }

// function Person() {

// }


// Object.assign(Person.prototype, canWalk, canSwim)
// const p1 = new Person()  // new keywrd is important here
// const p2 = new Person()  // new keyword is important here


// ==================end=======================
// ===============propertyDescriptor start===============================
// let person = { "age": 10 }
// let res = Object.getOwnPropertyDescriptor(person, 'age')
// Object.defineProperty(person, 'name', {
//     configurable: false,  // for deleetion
//     enumerable: true, // for iteration
//     writable: true,  // for value overriding
//     value: "ram",

// })
// ====================================end=================================

// ================iterating  instance and prototype members============================
// function Shape() {
//     this.draw = function () {
//         console.log("draw");
//     }
// }

// Shape.prototype.move = function () {
//     console.log("move");
// }
// const s = new Shape()
// console.log("instance members", Object.keys(s));
// for(let key in s)
//     console.log("prototype + instance members", key);
// ====================================================================================
