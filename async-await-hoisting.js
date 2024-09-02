// asyn-await is used for handling the promises
// await keyword is used for resolving the promises.
// using await execution is blocked


// How fetch api works: It is used for making network calls
// async function handleFetch() {
//     const data = await fetch('API_URL'); // returns a response object of Readable stream
//     const jsonValue = await data.json() // converts Readable stream into json value

// fetch().then(res => res.json()).then(res => console.log())
// }

// Temporal dead zone exist for let and const.
// Temporal dead zone:  Time being in which variable is hoisted and value is assigned
// We cannot access a variable when it is in the temporal dead zone.

// let and const are block scoped. It means it is accessible inside the defined block  block.
// if let & const is defined outside of any block then it will be global scope.
// var -> function scoped. If  a variable is declared outside of any function then it will be the part of window object
// let & const -> block scope


// 3 ways to declare a variable: var,let & const

// {
//     var a = 10;
//     let b = 20;
//     let c = 30;
//     console.log("a", a);
//     console.log("b:", b);
//     console.log("c:", c);
// }
// console.log("a", a);
// console.log("b:", b);
// console.log("c:", c);

// Shadowing in node
var a = 100;
{
    var a = 10;
    let b = 20;
    let c = 30;
    console.log("a", a); // It will shadow value of a
    console.log("b:", b);
    console.log("c:", c);
}
console.log("a", a);

// Shadowing happens only in case of var keyword not in let

let a = 100;
{
    var a = 10;
    let b = 20;
    let c = 30;
    console.log("a", a); // It will not hadow value of a. It will thow error
    console.log("b:", b);
    console.log("c:", c);
}
console.log("a", a);


//Illegal shadowing
// Below code will throw error.

let a = 10;
{
    var a = 20
}