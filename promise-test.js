// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })

// promise1.then(res => {
//     console.log(res)
// })

// console.log('end');


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })


// console.log('end');




// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
//     resolve(4);
// })

// promise1.then(res => {
//     console.log(res)
// })

// console.log('end');





// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })

// promise1.then(res => {
//     console.log(2)
// })

// console.log('end');



// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//     console.log(res)
// })

// console.log('end')

//


// console.log('start')

// Promise.resolve(1).then((res) => {
//     console.log(res)
// })

// Promise.resolve(2).then((res) => {
//     console.log(res)
// })

// console.log('end')



// console.log('start')

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//         console.log("timerStart");
//         resolve("success");
//         console.log("timerEnd");
//     }, 0);
//     console.log(2);
// });

// promise.then((res) => {
//     console.log(res);
// });

// console.log(4);
// console.log('end')






const timer1 = setTimeout(() => {
    console.log('timer1');

    const promise1 = Promise.resolve().then(() => {
        console.log('promise1')
    })
}, 0)

const timer2 = setTimeout(() => {
    console.log('timer2')
}, 0)
