function printFizz(num) {
    for (let counter = 1; counter <= num; counter++) {
        let msg = `${counter} `
        if (counter % 3 === 0) {
            msg += "FIZZ"
        }
        if (counter % 5 === 0) {
            msg += "BUZZ"
        }
        console.log(msg)
    }
}
// printFizz(17)
console.log("start")
// setImmediate(() => {
//     console.log('setImmediate executed')

// })

// setTimeout(() => {
//     console.log('timeout executed')
// }, 0)


// setImmediate(function A() {
//     console.log("1st immediate");
// });

// setImmediate(function B() {
//     console.log("2nd immediate");
// });

// process.nextTick(function C() {
//     console.log("1st process");
// });

// process.nextTick(function D() {
//     console.log("2nd process");
// });

// // First event queue ends here
// console.log("program started");
// console.log("end")



// What is Promisification ?
//     Promisification means transformation.It’s a conversion of a function that accepts a callback into a function returning a promise.
// Using Node.js's util.promisify():




// const getSumAsync = (num1, num2, callback) => {

//     if (!num1 || !num2) {
//         return callback(new Error("Missing arguments"), null);
//     }
//     return callback(null, num1 + num2);
// }

// getSumAsync(1, 1, (err, result) => {
//     if (err) {
//         doSomethingWithError(err)
//     } else {
//         console.log(result) // 2
//     }
// })


// const { promisify } = require('util')
// const getSumPromise = promisify(getSumAsync) // step 1
// getSumPromise(1, 1) // step 2
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         doSomethingWithError(err);
//     })


const asyncSum = (num1, num2, callback) => {
    if (!num1 || !num2) {
        return callback(new Error('error  occured'), null);
    }
    else {
        return callback(null, num1 + num2)
    }
}

// asyncSum(1, 1, (err, result) => {
//     if (err) {
//         console.log("err:", err);
//     }
//     else {
//         console.log("result:", result)
//     }
// })

const { promisify } = require('util')
const promiseSum = promisify(asyncSum);
promiseSum(1, 1).then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log("err:", err)
})