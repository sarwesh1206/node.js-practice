// Property descriptor========================
const person = { "age": 10 }

//---------------custom inheritance-------------------
// console.log("hello",);

// function Shape(color) {
//     this.color = color;
// }
// Shape.prototype.duplicate = function () {
//     console.log("duplicate",);
// }


// function Circle(radius) {
//     Shape.call(this, 'red');// calling the super constructor
//     this.radius = radius;

// }
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.connstructor = Circle; // Important to add


// Circle.prototype.draw = function () {
//     console.log("draw",);
// }

// const s1 = new Shape()
// const c = new Circle(1)
// console.log(c.color);

//------------------end custom inheritence---------------//
//--------------Intermediate function inheritence------------------------
// console.log("hello",);

// function Shape(color) {
//     this.color = color;
// }
// Shape.prototype.duplicate = function () {
//     console.log("duplicate",);
// }

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child
// }
// extend(Circle, Shape);


// function Circle(radius) {
//     Shape.call(this, 'red');// calling the super constructor
//     this.radius = radius;

// }

// Circle.prototype.draw = function () {
//     console.log("draw",);
// }

// const s1 = new Shape()
// const c = new Circle(1)
// console.log(c.color);

// function Square(size) {
//     this.size = size;
// }
// extend(Square, Shape)

// const sq = new Square(10);

// sq.duplicate()
//=========================end========================
//===================method overriding====================
// console.log("hello",);

// function Shape(color) {
//     this.color = color;
// }
// Shape.prototype.duplicate = function () {
//     console.log("duplicate",);
// }

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child
// }
// extend(Circle, Shape);
// //order of this funcion is important
// Circle.prototype.duplicate = function () {
//     console.log("duplicate circle",);
// }

// function Circle(radius) {
//     Shape.call(this, 'red');// calling the super constructor
//     this.radius = radius;

// }

// Circle.prototype.draw = function () {
//     console.log("draw",);
// }

// const s1 = new Shape()
// const c = new Circle(1)
// console.log(c.color);

// function Square(size) {
//     this.size = size;
// }
// extend(Square, Shape)

// const sq = new Square(10);

// sq.duplicate()
// c.duplicate()

//=================================================================
//===============polymorphism======================================
// console.log("hello",);

// function Shape(color) {
//     this.color = color;
// }
// Shape.prototype.duplicate = function () {
//     console.log("duplicate",);
// }

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child
// }
// extend(Circle, Shape);
// //order of this funcion is important
// Circle.prototype.duplicate = function () {
//     console.log("duplicate circle",);
// }

// function Circle(radius) {
//     Shape.call(this, 'red');// calling the super constructor
//     this.radius = radius;

// }

// Circle.prototype.draw = function () {
//     console.log("draw",);
// }

// const s1 = new Shape()
// const c = new Circle(1)
// console.log(c.color);

// function Square(size) {
//     this.size = size;
// }
// extend(Square, Shape)
// Square.prototype.duplicate = function () {
//     console.log("duplicate square",);
// }

// const shapes = [new Circle(), new Square()]
// for (let shape of shapes)
//     shape.duplicate();
//============== end====================================

// //===================composition or mixin===================
// const canEat = {
//     eat: function () {
//         this.hunger--;
//         console.log("eating",);
//     }
// }
// const canWalk = {
//     walk: function () {
//         console.log("walking",);
//     }
// }

// const person = Object.assign({}, canEat, canWalk);
// console.log("person", person);
// //===========================================================


//===================composition or mixin by prototype===================
// function mixin(target, ...sources) {
//     Object.assign(target, ...sources)
// }
// const canEat = {
//     eat: function () {
//         this.hunger--;
//         console.log("eating",);
//     }
// }
// const canWalk = {
//     walk: function () {
//         console.log("walking",);
//     }
// }
// const canSwim = {
//     swim: function () {
//         console.log("swim",);
//     }
// }
// function Person() {

// }

// Object.assign(Person.prototype, canEat, canWalk);
// const person = new Person();
// console.log("person", person);
// function Goldfish() {

// }
// Object.assign(Goldfish.prototype, canEat, canSwim);
// const goldFish = new Goldfish();
// console.log("goldFish", goldFish);

// //==========================================


