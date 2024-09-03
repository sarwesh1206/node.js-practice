// https://github.com/lydiahallie/javascript-questions

//  What's the output?
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter())

//  What's the output?
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

// In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.

// If you want a method to be available to all object instances, you have to add it to the prototype property:

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };



// let arr = [ 'a', 2, true, ['aa'], {'a' : 'b1'},{'a':'c1'}]

// let newarr = arr.filter((obj)=>{
//   if(obj['a'])
//   return obj['a']
// })

// console.log(newarr)


console.log({} === {}, {} == {}, [] === [], [] == [], null == null, ['a'] === ['a'])


// 20. What's the output?
// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();
// A: 21
// B: undefined
// C: ReferenceError
// D: TypeError
// Answer
// Answer: C
// With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.


// 23. What's the output?
// var num = 8;
// var num = 10;

// console.log(num);
// A: 8
// B: 10
// C: SyntaxError
// D: ReferenceError
// Answer
// Answer: B
// With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

// You cannot do this with let or const since they're block-scoped



// 13. What are the three phases of event propagation?
// A: Target > Capturing > Bubbling
// B: Bubbling > Target > Capturing
// C: Target > Bubbling > Capturing
// D: Capturing > Target > Bubbling
// Answer
// Answer: D
// During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins.


// What's the output?
// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;
// A: "Lydia" 21["", " is ", " years old"]
// B: ["", " is ", " years old"] "Lydia" 21
// C: "Lydia"["", " is ", " years old"] 21
// Answer
// Answer: B
// If you use tagged template literals, the value of the first argument is always an array of the string values.The remaining arguments get the values of the passed expressions!


// 25. What's the output?
// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);
// A: { a: "one", b: "two" }
// B: { b: "two", a: "three" }
// C: { a: "three", b: "two" }
// D: SyntaxError
// Answer
// Answer: C
// If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

start 29