// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.move = function () {
//             // this method will not come in prototypes. It will come in instant property.
//         }
//     }
//     draw() {
//         // It will coes in prototypes
//     }
//     //static method
//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }
// const c = new Circle(1)
// console.log("c", c);
// console.log("static method", Circle.parse('{"radius":1}'));

// classes are not hoisted in js

class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log("move",);
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color)  //It will parent class constructor. For initializing the parent object values
        this.radius = radius
    }
    draw() {
        console.log("draw",);

    }
}
const c = new Circle('red', 'green')

// By using super() method, We can call parent class method.
// class Circle {
//     constructor(radius) {
//         this.radius = radius;

//     }
//     move() {
//         console.log("move:",);
//     }
// }

// const c = new Circle(1)

// In strict mode, global object is not modified accidently