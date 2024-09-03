// var a = 10
// function foo() {
//     console.log(a)
// }

// function bar() {
//     var a = 20
//     foo()
// }

// bar()

// This question is error-prone and a frequent question in interviews. You can think about it.

// Simply, JavaScript implements a scoping mechanism named lexical scoping (or static scoping). It’s called lexical (or static) because the engine determines the nesting of scopes just by looking at the JavaScript source code, no matter where it is called.



// var a = 10

// function bar() {
//     var a = 20

//     function foo() {
//         console.log(a)
//     }

//     foo()
// }

// bar()

// The foo scope becomes a child scope of bar scope:
// When the JavaScript engine does not find a in the Foo scope, it will first look for a from the parent scope of the Foo scope, which is the Bar scope, and it does find a. So the output is 20:


// question
// function outerFunc() {
//     let a = 10;

//     function innerFunc() {
//         console.log(a);
//     }
//     return innerFunc;
// }

// let innerFunc = outerFunc();
// innerFunc()



// question:- This code snippet uses JavaScript Immediately-invoked Function Expressions (IIFE).
// (function (a) {
//     return (function (b) {
//         console.log(a);
//     })(1);
// })(0);


// question:-
// let i = 0
// function increase() {
//     i++
//     console.log(`courrent counter is ${i}`)
//     return i
// }

// increase()
// increase()
// increase()

// Question:-
// let count = 0;

// (function () {
//     if (count === 0) {
//         let count = 1;
//         console.log(count);
//     }
//     console.log(count);
// })();

// Question:-
// function createCounter() {
//     let i = 0
//     return function () {
//         i++
//         return i
//     }
// }

// let increase1 = createCounter()
// let increase2 = createCounter()

// console.log(increase1())
// console.log(increase1())

// console.log(increase2())
// console.log(increase2())

// Question:-
// function createCounter() {
//     let count = 0;
//     function increase() {
//         count++;
//     }
//     let message = `Count is ${count}`;

//     function log() {
//         console.log(message);
//     }

//     return [increase, log];
// }
// const [increase, log] = createCounter();
// increase();
// increase();
// increase();
// log();


// Question:-
// function createCounter() {
//     let count = 0;
//     function increase() {
//         count++;
//     }

//     function log() {
//         let message = `Count is ${count}`;
//         console.log(message);
//     }

//     return [increase, log];
// }
// const [increase, log] = createCounter();
// increase();
// increase();
// increase();
// log();


// Question:-
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 0)
// }

//Question:-
// for ( var i = 0 ; i < 5 ; ++i ) {
//     (function(cacheI){
//         setTimeout(function(){
//             console.log(cacheI);
//         },0)
//     })(i)
//   }  ;

// console.log(true + false)

// question. How to convert the format of an array from string to length of string ?
// const array = ['hello', 'bye', 'see you'];
// const convertedArray = array.map(string => string.length);

// Ques. How to compute the sum of numbers in an array?
// const array = [1,7,8,9];
// const sum = array1.reduce((accumulator, currentValue) => accumulator = accumulator + currentValue);


// Question.What should we expect from the console ?

//     (function () {
//         var a = b = 42;
//     })();

// console.log(typeof a); // undefined
// console.log(typeof b); // number

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log("sum", sum(3)(5)(9));

//Data hiding and encapsulation
function createCounter() {
    let counter = 0;

    return function () {
        counter++;
        return counter;
    }
}

const counter = createCounter()
console.log("counter1:", counter()); //1
console.log("counter2:", counter()); //2
console.log("counter3:", counter());//3

//Factory Function

