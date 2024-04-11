// Camel Notation: oneTwoYhree
// Pascal Notation: OneTwoThree

// Factory functions return/create an object
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw cicle",);
        }
    }
}
const circle1 = createCircle(1);
console.log(circle1);

//Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
// new keyword will be used to create object
const circle = new Circle(1); // pascal notation is used for contructor function
// When we use new operator 3 things happen
// 1:  It create empty object
// 2: It point this to empty object
// 3: It return object from function implicitly. retun this

let x = {};
// let x = new Object(); // js traslates into this.
// built in constructor in js are
//new String();//new Array(); new Function()

// In js functions are objects
//  Refrencce types variables:- Functions,objects,arrays

// cloning an Object
// const another = Object.assign({}, circle);
//spread operator
// const another = { ...circle }

let now = new Date().toISOString();
console.log(now);


// Destructing object
const { name } = { name: 'ranjesh' }

// Destructing array
const [item1] = [1]
