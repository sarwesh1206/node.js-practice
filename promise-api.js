
// Promise.all API
// wait for all the promises to settle to success state
// If any promise is failed it will  throw error object
//Input is an array of promises and output is aggregated array containing all values.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 success")
//     }, 1000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 success")
//     }, 2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 success")
//     }, 3000)
// })

// Promise.all([p1, p2, p3]).then((res) => {
//     console.log('res:', res) // res: [ 'p1 success', 'p1 success', 'p1 success' ]
// })


// ----------------allSettled--------------------

// allSettled API waits for all the promises to settled irrespective of their states
//Input is an array of promises and output is aggregated array containing all values and their states. Array of objects
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 success")
//     }, 1000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p1 success")
//     }, 2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 success")
//     }, 3000)
// })

// Promise.allSettled([p1, p2, p3]).then((res) => {
//     console.log('res:', res)
// })

// res: [
//     { status: 'fulfilled', value: 'p1 success' },
//     { status: 'rejected', reason: 'p1 success' },
//     { status: 'fulfilled', value: 'p1 success' }
// ]

// =======================race============
// It is a race for first promise settled promise irrespective of their states.
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p1 failure")
//     }, 1000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p1 success")
//     }, 2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 success")
//     }, 3000)
// })

// Promise.race([p1, p2, p3]).then(res => {
//     console.log("res:", res);
// }).catch(err => {
//     console.log("err:", err);
// })

// err: p1 failure

// =================Any====================
// any waits for the first settled success promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p1 failure")
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 success")
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 success")
    }, 3000)
})

Promise.any([p1, p2, p3]).then(res => {
    console.log("res:", res);
}).catch(err => {
    console.log("err:", err);
    console.log("err:", err.errors);

})

// res: p2 success

// In case if all promises are jected then it will print below message
// err: AggregateError: All promises were rejected