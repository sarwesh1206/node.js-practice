const duplicateArray = [1, 2, 2, 3, 3, 3, 4];


// const newArr = duplicateArray.filter((item, position) => {
//     // console.log("item,position", item, position);
//     return duplicateArray.indexOf(item) == position;
// })

// const newArr = duplicateArray.filter((item, pos) => {
//     console.log("item", item);
//     return duplicateArray.indexOf(item) == pos
// })
// console.log("newArr---", newArr);

// const array = [1, 7, 8, 9];

// const sum = array.reduce((accumulator, currentValue) => {
//     return accumulator = accumulator + currentValue
// }, 0);
// console.log("sum:", sum);

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

// consoleisr.log('end');


const promise = new Promise((resolve, reject) => {
    reject(2)
})
promise.then(res => {
    console.log("res:", res);
}).catch(err => {
    console.log("err:", err);
})